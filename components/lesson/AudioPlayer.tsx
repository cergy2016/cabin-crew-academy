'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, RotateCcw, Volume2, Volume1, VolumeX } from 'lucide-react';
import { useAppStore } from '@/lib/store';

interface AudioPlayerProps {
  audioUrl: string;
  showWaveform?: boolean;
  showTranscription?: boolean;
  transcription?: string;
  onTimeUpdate?: (currentTime: number, duration: number) => void;
}

export default function AudioPlayer({
  audioUrl,
  showWaveform = true,
  showTranscription = false,
  transcription,
  onTimeUpdate,
}: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [playbackRate, setPlaybackRate] = useState(1);
  const { soundEnabled, playbackSpeed } = useAppStore();

  // Animated bars for waveform
  const barCount = 40;
  const bars = Array.from({ length: barCount }, (_, i) => {
    const progress = currentTime / duration || 0;
    const isActive = i / barCount < progress;
    return {
      id: i,
      height: Math.sin((i + currentTime) * 0.1) * 0.4 + 0.6,
      isActive,
    };
  });

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
      onTimeUpdate?.(audio.currentTime, audio.duration);
    };

    const handleDurationChange = () => {
      setDuration(audio.duration);
    };

    const handleEnded = () => {
      setIsPlaying(false);
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleDurationChange);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleDurationChange);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [onTimeUpdate]);

  const handlePlayPause = () => {
    if (!audioRef.current) return;

    if (!soundEnabled) {
      alert('Sound is disabled. Enable it in settings.');
      return;
    }

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleStop = () => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setCurrentTime(0);
    setIsPlaying(false);
  };

  const handleReplay = () => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = 0;
    setCurrentTime(0);
    audioRef.current.play();
    setIsPlaying(true);
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    audioRef.current.currentTime = percent * duration;
    setCurrentTime(percent * duration);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const vol = parseFloat(e.target.value);
    setVolume(vol);
    if (audioRef.current) {
      audioRef.current.volume = vol;
    }
  };

  const handlePlaybackRateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const rate = parseFloat(e.target.value);
    setPlaybackRate(rate);
    if (audioRef.current) {
      audioRef.current.playbackRate = rate;
    }
  };

  const formatTime = (time: number) => {
    if (!isFinite(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const getVolumeIcon = () => {
    if (volume === 0) return <VolumeX className="w-4 h-4" />;
    if (volume < 0.5) return <Volume1 className="w-4 h-4" />;
    return <Volume2 className="w-4 h-4" />;
  };

  return (
    <div className="space-y-4">
      <audio ref={audioRef} src={audioUrl} crossOrigin="anonymous" />

      {/* Waveform Visualization */}
      {showWaveform && (
        <motion.div
          className="flex items-center justify-center gap-1 h-12 px-4 bg-gradient-to-r from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-900 rounded-lg cursor-pointer group"
          onClick={handleProgressClick}
        >
          {bars.map((bar) => (
            <motion.div
              key={bar.id}
              className={`flex-1 rounded-full transition-colors ${
                bar.isActive
                  ? 'bg-gradient-to-t from-indigo-600 to-indigo-400 dark:from-indigo-500 dark:to-indigo-300'
                  : 'bg-slate-300 dark:bg-slate-600 group-hover:bg-slate-400 dark:group-hover:bg-slate-500'
              }`}
              initial={{ height: '50%' }}
              animate={{ height: `${bar.height * 100}%` }}
              transition={{ duration: 0.1 }}
            />
          ))}
        </motion.div>
      )}

      {/* Controls */}
      <div className="flex items-center justify-between gap-4 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 p-4">
        {/* Play/Pause Buttons */}
        <div className="flex items-center gap-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handlePlayPause}
            className="p-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
            title={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? (
              <Pause className="w-5 h-5" />
            ) : (
              <Play className="w-5 h-5 ml-0.5" />
            )}
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleReplay}
            className="p-2 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
            title="Replay"
          >
            <RotateCcw className="w-4 h-4" />
          </motion.button>
        </div>

        {/* Time Display */}
        <div className="text-sm font-medium text-slate-600 dark:text-slate-400 whitespace-nowrap">
          {formatTime(currentTime)} / {formatTime(duration)}
        </div>

        {/* Progress Bar */}
        <div className="flex-1 group cursor-pointer" onClick={handleProgressClick}>
          <div className="relative h-1.5 bg-slate-300 dark:bg-slate-600 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-indigo-600 to-indigo-400 dark:from-indigo-500 dark:to-indigo-300 rounded-full"
              animate={{ width: `${(currentTime / duration) * 100}%` }}
              transition={{ type: 'tween', duration: 0.1 }}
            />
            <motion.div
              className="absolute top-1/2 w-3 h-3 bg-white dark:bg-slate-200 rounded-full shadow-md transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
              animate={{ left: `${(currentTime / duration) * 100}%` }}
              transition={{ type: 'tween', duration: 0.1 }}
            />
          </div>
        </div>

        {/* Volume Control */}
        <div className="flex items-center gap-2">
          {getVolumeIcon()}
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={handleVolumeChange}
            className="w-16 h-1 bg-slate-300 dark:bg-slate-600 rounded-full cursor-pointer"
            title="Volume"
          />
        </div>

        {/* Playback Speed */}
        <select
          value={playbackRate}
          onChange={handlePlaybackRateChange}
          className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium border border-slate-300 dark:border-slate-700"
          title="Playback Speed"
        >
          <option value={0.75}>0.75x</option>
          <option value={1}>1x</option>
          <option value={1.25}>1.25x</option>
          <option value={1.5}>1.5x</option>
          <option value={2}>2x</option>
        </select>
      </div>

      {/* Transcription Display */}
      {showTranscription && transcription && (
        <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
          <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">
            Transcription
          </p>
          <p className="text-slate-900 dark:text-slate-100 leading-relaxed">
            {transcription}
          </p>
        </div>
      )}
    </div>
  );
}
