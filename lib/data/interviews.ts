import type { InterviewBank, InterviewQuestion } from '../types';

/**
 * Interview Preparation Database
 * 100+ real-style interview questions across 8 airlines plus a general pool,
 * each with a model answer, score breakdown, and common mistakes to avoid.
 */

export const interviewBanks: InterviewBank[] = [
  {
    id: 'emirates-bank',
    airline: 'Emirates',
    description: 'Dubai-based luxury carrier, one of the largest in the world by international passenger traffic.',
    country: 'UAE',
    difficulty: 3,
    questions: [
      {
        id: 'emirates-q-1',
        airline: 'Emirates',
        category: 'hr',
        question: 'Tell us about yourself. Why do you want to be cabin crew for Emirates?',
        difficulty: 1,
        modelAnswers: [
          {
            answer:
              'My name is John, and I am excited about joining Emirates as cabin crew. I have always been passionate about aviation and hospitality. Emirates is known for its world-class service and excellence, and I would like to be part of that legacy. I am enthusiastic, customer-focused, and committed to delivering exceptional service to every passenger.',
            scoreBreakdown: { pronunciation: 85, grammar: 90, vocabulary: 88, fluency: 85, confidence: 90, professionalism: 92 },
          },
          {
            answer:
              'I am passionate about international travel and creating memorable passenger experiences. Emirates represents the pinnacle of aviation service, and I am eager to contribute my skills and dedication to your team. I believe my strong communication abilities and customer service experience make me an ideal candidate for this role.',
            scoreBreakdown: { pronunciation: 88, grammar: 92, vocabulary: 90, fluency: 88, confidence: 87, professionalism: 93 },
          },
        ],
        mistakesToAvoid: [
          "Saying 'I just want to travel for free'",
          'Not mentioning Emirates specifically',
          'Appearing unprepared or unfocused',
          'Using informal language or slang',
        ],
      },
      {
        id: 'emirates-q-2',
        airline: 'Emirates',
        category: 'behavioral',
        question: 'Describe a time when you had to deal with a difficult passenger. How did you handle it?',
        difficulty: 2,
        modelAnswers: [
          {
            answer:
              'During a flight, I had a passenger who was upset about their seat assignment. Instead of being defensive, I listened to their concerns empathetically. I apologized for the inconvenience and explained the seating policy professionally. Then I offered alternative solutions and checked if there were available seats in their class. The passenger appreciated my understanding, and we found a solution that satisfied them. This taught me the importance of active listening and problem-solving in customer service.',
            scoreBreakdown: { pronunciation: 87, grammar: 91, vocabulary: 89, fluency: 86, confidence: 88, professionalism: 91 },
          },
        ],
        mistakesToAvoid: ['Blaming the passenger', 'Showing frustration or anger', 'Being defensive', 'Not taking responsibility'],
      },
      {
        id: 'emirates-q-3',
        airline: 'Emirates',
        category: 'situational',
        question: 'What would you do if a passenger refused to follow safety instructions?',
        difficulty: 3,
        modelAnswers: [
          {
            answer:
              'Safety is the top priority on any flight. I would first approach the passenger calmly and professionally, without being confrontational. I would explain the reason behind the instruction in a friendly manner - for example, that seatbelts save lives in turbulence. If they still refused, I would inform the senior crew member immediately and document the incident. I would never compromise on safety, but I would always try to resolve the situation through communication first.',
            scoreBreakdown: { pronunciation: 89, grammar: 93, vocabulary: 91, fluency: 88, confidence: 89, professionalism: 94 },
          },
        ],
        mistakesToAvoid: ['Threatening the passenger', 'Ignoring the safety issue', 'Being rude or harsh', 'Not escalating to senior crew when needed'],
      },
      {
        id: 'emirates-q-4',
        airline: 'Emirates',
        category: 'hr',
        question: 'Emirates crew are based in Dubai, away from family and friends. How do you feel about relocating?',
        difficulty: 2,
        modelAnswers: [
          {
            answer:
              "I have thought about this carefully and I am genuinely excited about the move. I see it as an opportunity for personal growth and to experience a new culture. I stay close to my family through regular calls and video chats, and I know Emirates has a strong crew community that helps new joiners settle in. I'm ready and looking forward to making Dubai my home.",
            scoreBreakdown: { pronunciation: 86, grammar: 90, vocabulary: 88, fluency: 87, confidence: 91, professionalism: 90 },
          },
        ],
        mistakesToAvoid: ['Sounding hesitant about relocating', 'Not researching life in Dubai', 'Focusing only on the downsides of leaving home'],
      },
      {
        id: 'emirates-q-5',
        airline: 'Emirates',
        category: 'behavioral',
        question: 'Emirates has one of the most multicultural crews in the world. Tell us about a time you worked with people from different cultural backgrounds.',
        difficulty: 2,
        modelAnswers: [
          {
            answer:
              'In my previous job at a hotel, I worked alongside colleagues from over ten different countries. I learned to be sensitive to different communication styles and customs - for example, adjusting how directly I gave feedback depending on the colleague. I made an effort to learn a few greetings in my colleagues\' languages, which helped build trust and rapport quickly. Working in that diverse environment taught me patience, curiosity, and genuine respect for different perspectives.',
            scoreBreakdown: { pronunciation: 87, grammar: 91, vocabulary: 90, fluency: 87, confidence: 88, professionalism: 92 },
          },
        ],
        mistakesToAvoid: ['Making generalizations about cultures', 'Suggesting discomfort with diversity', 'Giving a vague, generic answer'],
      },
      {
        id: 'emirates-q-6',
        airline: 'Emirates',
        category: 'situational',
        question: 'You notice a colleague is not following grooming standards before a flight. What would you do?',
        difficulty: 2,
        modelAnswers: [
          {
            answer:
              "I would speak to my colleague privately and respectfully, rather than pointing it out in front of others. Grooming standards reflect on the whole crew and the airline's brand, so I would mention it in a supportive way, as a colleague looking out for them, not as a criticism. If it were a recurring or serious issue, I would follow up with the senior crew member so it could be addressed properly.",
            scoreBreakdown: { pronunciation: 85, grammar: 89, vocabulary: 87, fluency: 85, confidence: 86, professionalism: 91 },
          },
        ],
        mistakesToAvoid: ['Embarrassing the colleague publicly', 'Ignoring the issue entirely', 'Being harsh or judgmental'],
      },
      {
        id: 'emirates-q-7',
        airline: 'Emirates',
        category: 'technical',
        question: 'Emirates operates some of the longest flights in the world. How would you stay energetic and attentive on a 16-hour flight?',
        difficulty: 2,
        modelAnswers: [
          {
            answer:
              'I would make sure to stay well hydrated throughout the flight, take short breaks during the designated rest periods, and keep a positive mindset by focusing on the passengers rather than the clock. I also believe good preparation before the flight - proper sleep and nutrition - makes a big difference in maintaining energy and attentiveness during long-haul service.',
            scoreBreakdown: { pronunciation: 86, grammar: 90, vocabulary: 88, fluency: 86, confidence: 87, professionalism: 89 },
          },
        ],
        mistakesToAvoid: ["Saying you'd rely on caffeine alone", 'Underestimating the physical demands of long-haul flying', 'Vague or unrealistic answers'],
      },
      {
        id: 'emirates-q-8',
        airline: 'Emirates',
        category: 'hr',
        question: 'What do you know about Emirates as an airline?',
        difficulty: 1,
        modelAnswers: [
          {
            answer:
              'Emirates is the flag carrier of the UAE, based in Dubai, and one of the largest airlines in the world by international passenger traffic. It flies to over 150 destinations across six continents, operates a young fleet including the Airbus A380, and is well known for premium service, generous cabin crew benefits, and a strong commitment to hospitality and diversity.',
            scoreBreakdown: { pronunciation: 87, grammar: 92, vocabulary: 90, fluency: 87, confidence: 88, professionalism: 90 },
          },
        ],
        mistakesToAvoid: ['Confusing Emirates with another Gulf carrier', 'Giving outdated or incorrect facts', 'Showing you have not researched the airline'],
      },
      {
        id: 'emirates-q-9',
        airline: 'Emirates',
        category: 'language',
        question: 'Can you describe your English proficiency and any other languages you speak?',
        difficulty: 1,
        modelAnswers: [
          {
            answer:
              'I am fluent in English, both written and spoken, and I use it confidently in professional settings. I also speak conversational French, which I studied for several years, and I am currently learning basic Arabic since I understand it would be valuable working in Dubai. I believe strong language skills are essential for connecting with passengers from around the world.',
            scoreBreakdown: { pronunciation: 88, grammar: 92, vocabulary: 90, fluency: 88, confidence: 89, professionalism: 90 },
          },
        ],
        mistakesToAvoid: ['Overstating your language level', 'Not mentioning any additional languages', 'Sounding unprepared for a multilingual environment'],
      },
      {
        id: 'emirates-q-10',
        airline: 'Emirates',
        category: 'behavioral',
        question: 'Tell us about a time you went above and beyond for a customer.',
        difficulty: 2,
        modelAnswers: [
          {
            answer:
              'A guest at the hotel where I worked mentioned it was their anniversary but they had not planned anything special due to a long day of travel. On my own initiative, I arranged for a small dessert and a handwritten note to be sent to their room that evening. They were touched by the gesture, and it reminded me how small, thoughtful actions can create a truly memorable experience for a guest.',
            scoreBreakdown: { pronunciation: 87, grammar: 91, vocabulary: 89, fluency: 87, confidence: 89, professionalism: 92 },
          },
        ],
        mistakesToAvoid: ['Giving an answer with no real initiative shown', 'Focusing on a reward you received rather than the guest', 'Being vague about the outcome'],
      },
    ],
  },
  {
    id: 'qatar-bank',
    airline: 'Qatar Airways',
    description: 'Doha-based 5-star carrier, consistently ranked among the world\'s best airlines for service quality.',
    country: 'Qatar',
    difficulty: 3,
    questions: [
      {
        id: 'qatar-q-1',
        airline: 'Qatar Airways',
        category: 'hr',
        question: 'Qatar Airways is known for luxury service. How would you contribute to this?',
        difficulty: 2,
        modelAnswers: [
          {
            answer:
              'Qatar Airways sets the highest standards in aviation service. I would contribute by consistently delivering exceptional hospitality with attention to detail. This means remembering passenger preferences, anticipating their needs, and going above and beyond to exceed expectations. I would maintain impeccable presentation, master our service procedures, and demonstrate genuine warmth and professionalism.',
            scoreBreakdown: { pronunciation: 88, grammar: 92, vocabulary: 91, fluency: 87, confidence: 89, professionalism: 92 },
          },
        ],
        mistakesToAvoid: ['Not understanding luxury service standards', 'Being dismissive of service details', 'Lacking enthusiasm'],
      },
      {
        id: 'qatar-q-2',
        airline: 'Qatar Airways',
        category: 'hr',
        question: 'Qatar Airways crew live together in company accommodation in Doha. How would you handle sharing your living space with colleagues?',
        difficulty: 2,
        modelAnswers: [
          {
            answer:
              'I understand this is part of life as Qatar Airways crew, and I actually see it positively - it helps build strong bonds with colleagues you will be flying with. I am respectful of shared spaces, communicate openly about house rules, and I am used to compromising and being considerate of others, having lived with roommates during my studies.',
            scoreBreakdown: { pronunciation: 85, grammar: 89, vocabulary: 87, fluency: 85, confidence: 87, professionalism: 89 },
          },
        ],
        mistakesToAvoid: ['Sounding reluctant about shared accommodation', 'Not having thought about this aspect of the job', 'Appearing overly private or antisocial'],
      },
      {
        id: 'qatar-q-3',
        airline: 'Qatar Airways',
        category: 'situational',
        question: 'A first-class passenger complains that the meal they pre-ordered is not available. What do you do?',
        difficulty: 3,
        modelAnswers: [
          {
            answer:
              'I would apologize sincerely and take ownership of the situation rather than blaming catering. I would explain what happened honestly and immediately offer the best available alternative, describing it in an appealing way. I would also check if there is anything else I can do to make up for the inconvenience, such as offering a complimentary amenity. The goal is to turn a disappointment into a moment that still shows exceptional care.',
            scoreBreakdown: { pronunciation: 88, grammar: 93, vocabulary: 91, fluency: 88, confidence: 90, professionalism: 93 },
          },
        ],
        mistakesToAvoid: ['Blaming the catering team to the passenger', 'Offering no alternative', 'Being dismissive of a first-class passenger\'s expectations'],
      },
      {
        id: 'qatar-q-4',
        airline: 'Qatar Airways',
        category: 'behavioral',
        question: 'Describe a time you had to follow a strict rule or procedure even though it was inconvenient.',
        difficulty: 2,
        modelAnswers: [
          {
            answer:
              'At a previous job, we had a strict policy on verifying ID before releasing certain items to guests, even when it slowed down service during busy periods. Although it sometimes frustrated guests in a hurry, I always followed the procedure fully, explaining politely why it mattered. I understand that rules like this exist for security and consistency, and following them, even when inconvenient, is part of being a reliable professional.',
            scoreBreakdown: { pronunciation: 86, grammar: 90, vocabulary: 88, fluency: 86, confidence: 87, professionalism: 91 },
          },
        ],
        mistakesToAvoid: ['Admitting to bending rules for convenience', 'Sounding resentful about following procedures', 'Not explaining the reasoning behind the rule'],
      },
      {
        id: 'qatar-q-5',
        airline: 'Qatar Airways',
        category: 'technical',
        question: 'What steps would you take if you noticed smoke coming from an overhead bin during a flight?',
        difficulty: 3,
        modelAnswers: [
          {
            answer:
              'I would immediately alert the senior crew member and the flight deck, and follow the trained procedure for a suspected fire, which includes retrieving the fire extinguisher and, if the item can be identified, using the appropriate containment method. I would keep passengers calm, move them away from the area if needed, and follow all checklist steps precisely, since fire is one of the most serious in-flight emergencies.',
            scoreBreakdown: { pronunciation: 88, grammar: 93, vocabulary: 92, fluency: 87, confidence: 88, professionalism: 93 },
          },
        ],
        mistakesToAvoid: ['Downplaying the seriousness of smoke or fire', 'Not mentioning informing the flight deck', 'Vague or uncertain procedural knowledge'],
      },
      {
        id: 'qatar-q-6',
        airline: 'Qatar Airways',
        category: 'hr',
        question: 'Why do you want to work for Qatar Airways specifically, rather than another airline?',
        difficulty: 1,
        modelAnswers: [
          {
            answer:
              'Qatar Airways has consistently been recognized as one of the best airlines in the world for service and safety. I am drawn to the airline\'s reputation for precision, discipline, and genuine hospitality, and I want to be trained to that world-class standard. Doha as a hub also connects me to an incredible range of destinations, which fits my passion for travel and cultural exchange.',
            scoreBreakdown: { pronunciation: 87, grammar: 91, vocabulary: 90, fluency: 87, confidence: 89, professionalism: 91 },
          },
        ],
        mistakesToAvoid: ['Giving an answer that could apply to any airline', 'Not knowing anything specific about Qatar Airways', 'Comparing negatively to a competitor'],
      },
      {
        id: 'qatar-q-7',
        airline: 'Qatar Airways',
        category: 'behavioral',
        question: 'Tell us about a time you had to remain calm under significant pressure.',
        difficulty: 2,
        modelAnswers: [
          {
            answer:
              'During a large event at the hotel I worked at, we had a sudden power outage right before service began. Guests were anxious and staff were overwhelmed. I stayed calm, reassured the guests with a confident tone, and helped coordinate backup lighting with the team while continuing to serve as many guests as possible. Staying composed helped keep the rest of the team focused rather than panicked.',
            scoreBreakdown: { pronunciation: 86, grammar: 90, vocabulary: 88, fluency: 86, confidence: 89, professionalism: 90 },
          },
        ],
        mistakesToAvoid: ['Describing a situation where you lost composure', 'Focusing only on the problem, not your response', 'Exaggerating the crisis unrealistically'],
      },
      {
        id: 'qatar-q-8',
        airline: 'Qatar Airways',
        category: 'situational',
        question: 'A passenger asks you for advice on what to see during a long layover in Doha. How do you respond?',
        difficulty: 1,
        modelAnswers: [
          {
            answer:
              'I would be happy to help and mention a few popular options depending on the length of their layover - for example, the Museum of Islamic Art, the Souq Waqif for local culture and food, or simply relaxing in one of the airport\'s premium lounges if their layover is short. I would ask about their interests first so my suggestions feel personal rather than generic.',
            scoreBreakdown: { pronunciation: 85, grammar: 89, vocabulary: 87, fluency: 85, confidence: 87, professionalism: 88 },
          },
        ],
        mistakesToAvoid: ['Saying you don\'t know anything about Doha', 'Giving generic advice with no local knowledge', 'Not asking about the passenger\'s time or interests first'],
      },
      {
        id: 'qatar-q-9',
        airline: 'Qatar Airways',
        category: 'language',
        question: 'How would you communicate with a passenger who speaks very little English?',
        difficulty: 2,
        modelAnswers: [
          {
            answer:
              'I would slow down my speech, use simple and clear vocabulary, and rely on gestures, pointing, or visual aids like the menu card when helpful. I would stay patient and check for understanding by asking simple yes-or-no questions. If available, I would also use translation cards or apps, or ask a colleague who speaks the passenger\'s language for assistance.',
            scoreBreakdown: { pronunciation: 86, grammar: 90, vocabulary: 88, fluency: 86, confidence: 87, professionalism: 89 },
          },
        ],
        mistakesToAvoid: ['Speaking louder instead of simpler', 'Showing impatience or frustration', 'Giving up on communicating clearly'],
      },
      {
        id: 'qatar-q-10',
        airline: 'Qatar Airways',
        category: 'hr',
        question: 'What does five-star service mean to you personally?',
        difficulty: 2,
        modelAnswers: [
          {
            answer:
              'To me, five-star service means anticipating needs before they are even expressed, being consistent no matter how busy or tired you are, and making each passenger feel individually cared for rather than just processed. It is the combination of technical excellence - knowing procedures perfectly - and genuine warmth that makes the difference between good service and truly memorable service.',
            scoreBreakdown: { pronunciation: 87, grammar: 91, vocabulary: 90, fluency: 87, confidence: 89, professionalism: 92 },
          },
        ],
        mistakesToAvoid: ['Giving a shallow or one-word answer', 'Focusing only on luxury amenities rather than care', 'Not connecting the answer to your own behaviour'],
      },
    ],
  },
  {
    id: 'british-airways-bank',
    airline: 'British Airways',
    description: 'UK flag carrier based at London Heathrow, part of IAG, known for its heritage and premium long-haul network.',
    country: 'United Kingdom',
    difficulty: 2,
    questions: [
      {
        id: 'ba-q-1',
        airline: 'British Airways',
        category: 'technical',
        question: 'What is your understanding of emergency procedures, particularly evacuation?',
        difficulty: 3,
        modelAnswers: [
          {
            answer:
              'Emergency procedures are critical in aviation. Cabin crew must be trained to lead passenger evacuation safely and efficiently, knowing all emergency exits, how to deploy slides, and how to direct passengers calmly and clearly. We must remain calm under pressure to provide reassurance to passengers. I am committed to completing all mandatory safety training and keeping my knowledge current, since safety is my responsibility to every passenger on board.',
            scoreBreakdown: { pronunciation: 89, grammar: 94, vocabulary: 92, fluency: 88, confidence: 87, professionalism: 93 },
          },
        ],
        mistakesToAvoid: ['Showing uncertainty about procedures', 'Not taking safety seriously', 'Lacking detailed knowledge'],
      },
      {
        id: 'ba-q-2',
        airline: 'British Airways',
        category: 'hr',
        question: 'British Airways has over 100 years of history. Why does that heritage appeal to you?',
        difficulty: 1,
        modelAnswers: [
          {
            answer:
              'British Airways has built its reputation over a century on trust, safety, and a distinctly British sense of professionalism combined with warmth. I am drawn to being part of an airline with such a strong legacy while still being forward-looking - investing in new aircraft and modern service standards. It feels meaningful to represent a brand with that level of history and credibility.',
            scoreBreakdown: { pronunciation: 87, grammar: 91, vocabulary: 89, fluency: 87, confidence: 88, professionalism: 90 },
          },
        ],
        mistakesToAvoid: ['Knowing nothing about the airline\'s history', 'Giving a generic answer not specific to BA', 'Sounding uninterested in tradition or service standards'],
      },
      {
        id: 'ba-q-3',
        airline: 'British Airways',
        category: 'behavioral',
        question: 'Tell us about a time you had to give a passenger news they did not want to hear.',
        difficulty: 2,
        modelAnswers: [
          {
            answer:
              'A guest once asked for a room upgrade that we could not provide because the hotel was fully booked. I explained clearly and honestly, expressed genuine regret, and immediately offered an alternative - a late check-out at no extra charge instead. Delivering the news calmly, with empathy and a solution ready, meant the guest left the conversation satisfied rather than frustrated.',
            scoreBreakdown: { pronunciation: 86, grammar: 90, vocabulary: 88, fluency: 86, confidence: 88, professionalism: 90 },
          },
        ],
        mistakesToAvoid: ['Avoiding giving the news directly', 'Not offering any alternative', 'Being overly apologetic without a solution'],
      },
      {
        id: 'ba-q-4',
        airline: 'British Airways',
        category: 'situational',
        question: 'A passenger in economy asks to be moved to an empty seat in business class. How do you respond?',
        difficulty: 2,
        modelAnswers: [
          {
            answer:
              'I would politely explain that seat upgrades follow specific company policy and cannot be granted directly by crew, but I would let them know I will check whether there are any available options according to procedure, such as an empty seat within their own cabin for extra comfort. I would keep the tone warm and understanding rather than simply saying no.',
            scoreBreakdown: { pronunciation: 85, grammar: 89, vocabulary: 87, fluency: 85, confidence: 87, professionalism: 89 },
          },
        ],
        mistakesToAvoid: ['Simply saying no with no explanation', 'Granting an unauthorized upgrade', 'Being dismissive of the request'],
      },
      {
        id: 'ba-q-5',
        airline: 'British Airways',
        category: 'hr',
        question: 'How do you maintain a professional appearance and demeanour during a long duty day?',
        difficulty: 1,
        modelAnswers: [
          {
            answer:
              'I make sure to prepare well before a duty - a good night\'s sleep, a proper meal, and my uniform and grooming checked and ready in advance. During the day, I take advantage of short breaks to freshen up, and I remind myself that every interaction with a passenger matters, no matter how tired I feel. A professional mindset and good preparation go hand in hand.',
            scoreBreakdown: { pronunciation: 86, grammar: 90, vocabulary: 88, fluency: 86, confidence: 87, professionalism: 90 },
          },
        ],
        mistakesToAvoid: ['Admitting appearance slips when tired', 'No mention of preparation or self-care', 'Sounding careless about presentation standards'],
      },
      {
        id: 'ba-q-6',
        airline: 'British Airways',
        category: 'behavioral',
        question: 'Describe a situation where you disagreed with a colleague. How did you resolve it?',
        difficulty: 2,
        modelAnswers: [
          {
            answer:
              'A colleague and I disagreed on how to prioritize tasks during a busy shift. Rather than letting it affect our teamwork, I suggested we take a moment to quickly discuss our reasoning and find a compromise that used both our ideas. We agreed on an approach together, and the shift ran smoothly. I learned that addressing disagreements early and respectfully prevents bigger problems later.',
            scoreBreakdown: { pronunciation: 86, grammar: 90, vocabulary: 88, fluency: 86, confidence: 87, professionalism: 90 },
          },
        ],
        mistakesToAvoid: ['Claiming you never disagree with anyone', 'Describing an unresolved conflict', 'Speaking negatively about the colleague'],
      },
      {
        id: 'ba-q-7',
        airline: 'British Airways',
        category: 'situational',
        question: 'You are serving the drinks trolley when unexpected turbulence begins. What do you do?',
        difficulty: 2,
        modelAnswers: [
          {
            answer:
              'I would immediately secure the trolley, ensuring it is locked in place, and calmly instruct any standing passengers to return to their seats and fasten their seatbelts. I would then take my own seat and fasten my seatbelt if instructed by the flight deck, following the captain\'s guidance throughout. Passenger and crew safety comes before completing the service.',
            scoreBreakdown: { pronunciation: 87, grammar: 91, vocabulary: 89, fluency: 87, confidence: 88, professionalism: 91 },
          },
        ],
        mistakesToAvoid: ['Continuing service during turbulence', 'Forgetting to secure the trolley', 'Not following flight deck instructions'],
      },
      {
        id: 'ba-q-8',
        airline: 'British Airways',
        category: 'hr',
        question: 'What does excellent customer service mean on a short-haul flight, where time is limited?',
        difficulty: 2,
        modelAnswers: [
          {
            answer:
              'On a short-haul flight, excellent service is about efficiency without losing warmth - being organized, moving quickly through the cabin, and still making eye contact and smiling with each passenger, even briefly. It means anticipating needs, like having the trolley fully stocked and ready, so that limited time is used as effectively as possible while passengers still feel looked after.',
            scoreBreakdown: { pronunciation: 86, grammar: 90, vocabulary: 88, fluency: 86, confidence: 87, professionalism: 90 },
          },
        ],
        mistakesToAvoid: ['Suggesting service quality can drop because of time pressure', 'Vague answer with no practical detail', 'Ignoring the efficiency aspect of the question'],
      },
      {
        id: 'ba-q-9',
        airline: 'British Airways',
        category: 'language',
        question: 'How would you clearly explain a safety demonstration to passengers who may not be paying attention?',
        difficulty: 1,
        modelAnswers: [
          {
            answer:
              'I would use clear, confident body language and a steady, engaging tone of voice to draw attention, making eye contact with passengers as I move through the demonstration. I would speak slowly and enunciate clearly so the safety information is easy to follow, and I would make sure my gestures matched what I was saying, since visual cues help even passengers who are not fully listening.',
            scoreBreakdown: { pronunciation: 88, grammar: 91, vocabulary: 89, fluency: 87, confidence: 88, professionalism: 90 },
          },
        ],
        mistakesToAvoid: ['Rushing through the demonstration', 'Speaking in a flat, disengaged tone', 'Not using clear gestures'],
      },
      {
        id: 'ba-q-10',
        airline: 'British Airways',
        category: 'behavioral',
        question: 'Tell us about your greatest achievement and why it matters to you.',
        difficulty: 1,
        modelAnswers: [
          {
            answer:
              'My greatest achievement was completing my hospitality diploma while working full-time to support myself. It required careful time management and real determination, especially during exam periods when I was also working evening shifts. It matters to me because it proved that with discipline and a clear goal, I can balance significant responsibilities and still succeed - a skill I know will serve me well as cabin crew.',
            scoreBreakdown: { pronunciation: 86, grammar: 90, vocabulary: 88, fluency: 86, confidence: 88, professionalism: 89 },
          },
        ],
        mistakesToAvoid: ['Choosing an achievement unrelated to effort or growth', 'Not explaining why it matters', 'Being overly modest or vague'],
      },
    ],
  },
  {
    id: 'etihad-bank',
    airline: 'Etihad Airways',
    description: 'Abu Dhabi-based national carrier of the UAE, known for guest-centric luxury and multicultural crews.',
    country: 'UAE',
    difficulty: 2,
    questions: [
      {
        id: 'etihad-q-1',
        airline: 'Etihad Airways',
        category: 'hr',
        question: 'Etihad describes its passengers as "guests" rather than customers. Why do you think that distinction matters?',
        difficulty: 2,
        modelAnswers: [
          {
            answer:
              'Calling passengers "guests" reflects a mindset of genuine hospitality rather than a simple transaction. It means treating each person the way you would welcome someone into your own home - with warmth, attentiveness, and personal care - rather than just completing a service task. I believe that small shift in language reflects a much bigger commitment to how we treat people.',
            scoreBreakdown: { pronunciation: 86, grammar: 90, vocabulary: 89, fluency: 86, confidence: 88, professionalism: 91 },
          },
        ],
        mistakesToAvoid: ['Not understanding the guest-centric philosophy', 'Giving a purely transactional answer', 'Sounding rehearsed without genuine understanding'],
      },
      {
        id: 'etihad-q-2',
        airline: 'Etihad Airways',
        category: 'situational',
        question: 'An elderly guest traveling alone seems anxious before takeoff. What would you do?',
        difficulty: 1,
        modelAnswers: [
          {
            answer:
              'I would approach them with a warm smile, kneel to their eye level if possible, and ask gently if there is anything I can help with. I would reassure them calmly, perhaps explaining what to expect during the flight, and check on them again after takeoff to make sure they are comfortable. Small, personal gestures like this can make a big difference to someone traveling alone.',
            scoreBreakdown: { pronunciation: 86, grammar: 90, vocabulary: 88, fluency: 86, confidence: 88, professionalism: 91 },
          },
        ],
        mistakesToAvoid: ['Ignoring the guest\'s anxiety', 'Being too brief or impersonal', 'Not following up after the initial interaction'],
      },
      {
        id: 'etihad-q-3',
        airline: 'Etihad Airways',
        category: 'behavioral',
        question: 'Describe a time you had to adapt quickly to a sudden change in plans.',
        difficulty: 2,
        modelAnswers: [
          {
            answer:
              'During an event I was helping organize, our main venue became unavailable just hours before it started due to a facilities issue. I stayed calm, quickly helped source a backup location, and communicated the change clearly to guests and staff. Despite the last-minute disruption, the event went smoothly, and I learned that staying flexible and solution-focused under pressure is essential.',
            scoreBreakdown: { pronunciation: 85, grammar: 89, vocabulary: 87, fluency: 85, confidence: 87, professionalism: 89 },
          },
        ],
        mistakesToAvoid: ['Describing a situation where you struggled to adapt', 'Focusing on the problem rather than your response', 'Sounding rigid or resistant to change'],
      },
      {
        id: 'etihad-q-4',
        airline: 'Etihad Airways',
        category: 'hr',
        question: 'Why did you choose Etihad Airways over other Gulf carriers?',
        difficulty: 1,
        modelAnswers: [
          {
            answer:
              'I am drawn to Etihad\'s guest-centric philosophy and its reputation for personalized luxury service, from the Residence suites to the warmth of the crew. Abu Dhabi as a base also appeals to me for its safety, culture, and quality of life. I want to grow within an airline that genuinely invests in training its crew to deliver thoughtful, individualized hospitality.',
            scoreBreakdown: { pronunciation: 86, grammar: 90, vocabulary: 89, fluency: 86, confidence: 88, professionalism: 90 },
          },
        ],
        mistakesToAvoid: ['Confusing Etihad with a competitor', 'Giving an answer with no specific detail', 'Speaking negatively about other airlines'],
      },
      {
        id: 'etihad-q-5',
        airline: 'Etihad Airways',
        category: 'situational',
        question: 'A guest tells you they have a severe nut allergy after the meal service has already started. What do you do?',
        difficulty: 3,
        modelAnswers: [
          {
            answer:
              'I would take this seriously immediately, thank them for telling me, and check the ingredients of anything already served or about to be served near them. I would inform the senior crew member so the whole team is aware and can avoid cross-contact, and I would make sure any nut-containing items are kept away from their area. I would also monitor them discreetly for any signs of a reaction.',
            scoreBreakdown: { pronunciation: 87, grammar: 91, vocabulary: 90, fluency: 87, confidence: 88, professionalism: 92 },
          },
        ],
        mistakesToAvoid: ['Treating a severe allergy casually', 'Not informing the rest of the crew', 'Failing to monitor the passenger afterward'],
      },
      {
        id: 'etihad-q-6',
        airline: 'Etihad Airways',
        category: 'behavioral',
        question: 'Tell us about a time you had to learn something new very quickly.',
        difficulty: 1,
        modelAnswers: [
          {
            answer:
              'When I started a new role at a busy restaurant, I had to learn an entirely new menu and point-of-sale system within two days before a major event. I stayed after my shifts to practice, asked experienced colleagues for tips, and made small notes I could quickly reference. By the event, I was confident and made no major mistakes, which taught me I can adapt quickly when needed.',
            scoreBreakdown: { pronunciation: 85, grammar: 89, vocabulary: 87, fluency: 85, confidence: 87, professionalism: 88 },
          },
        ],
        mistakesToAvoid: ['Claiming you rarely need to learn new things', 'Not describing how you actually learned it', 'Sounding overwhelmed rather than resourceful'],
      },
      {
        id: 'etihad-q-7',
        airline: 'Etihad Airways',
        category: 'technical',
        question: 'What would you check during your pre-flight safety inspection of the cabin?',
        difficulty: 2,
        modelAnswers: [
          {
            answer:
              'I would check that emergency equipment such as life vests, oxygen bottles, fire extinguishers, and first aid kits are present, correctly stowed, and within their expiry dates. I would also verify that emergency exits are unobstructed, safety cards are in each seat pocket, and that all galley equipment is properly secured before boarding begins.',
            scoreBreakdown: { pronunciation: 87, grammar: 92, vocabulary: 90, fluency: 87, confidence: 87, professionalism: 91 },
          },
        ],
        mistakesToAvoid: ['Vague or incomplete answer', 'Missing mention of emergency equipment checks', 'Not mentioning exits or safety cards'],
      },
      {
        id: 'etihad-q-8',
        airline: 'Etihad Airways',
        category: 'hr',
        question: 'How do you define good teamwork in a cabin crew environment?',
        difficulty: 1,
        modelAnswers: [
          {
            answer:
              'Good teamwork means supporting your colleagues without being asked, communicating clearly and calmly, and trusting each other to handle your responsibilities, especially during busy or difficult moments. On a flight, crew members often meet each other for the first time, so being open, respectful, and quick to help is essential for the whole cabin to run smoothly.',
            scoreBreakdown: { pronunciation: 86, grammar: 90, vocabulary: 88, fluency: 86, confidence: 87, professionalism: 90 },
          },
        ],
        mistakesToAvoid: ['Focusing only on individual performance', 'Giving a generic dictionary-style answer', 'Not connecting the answer to a crew context'],
      },
      {
        id: 'etihad-q-9',
        airline: 'Etihad Airways',
        category: 'language',
        question: 'How comfortable are you speaking in front of a large group, such as during a boarding announcement?',
        difficulty: 1,
        modelAnswers: [
          {
            answer:
              'I am comfortable speaking in front of groups; I have experience presenting during training sessions and events. I focus on speaking clearly, at a steady pace, and projecting my voice confidently, while keeping a warm and welcoming tone. Practice has helped me feel calm and natural doing public announcements.',
            scoreBreakdown: { pronunciation: 87, grammar: 90, vocabulary: 88, fluency: 87, confidence: 89, professionalism: 90 },
          },
        ],
        mistakesToAvoid: ['Admitting strong fear of public speaking', 'Not giving a concrete example of experience', 'Speaking too quietly during the actual interview'],
      },
      {
        id: 'etihad-q-10',
        airline: 'Etihad Airways',
        category: 'situational',
        question: 'You are mid-service when the call bell rings for a medical situation. What is your immediate priority?',
        difficulty: 2,
        modelAnswers: [
          {
            answer:
              'My immediate priority would be to assess the passenger calmly, check for responsiveness and breathing, and call for the senior crew member and any medical professional on board using the standard procedure. I would pause service in that area if needed and focus fully on the passenger\'s wellbeing until help arrives, following our medical emergency protocol step by step.',
            scoreBreakdown: { pronunciation: 87, grammar: 91, vocabulary: 89, fluency: 87, confidence: 88, professionalism: 92 },
          },
        ],
        mistakesToAvoid: ['Continuing service before assessing the passenger', 'Not mentioning calling for help', 'Showing panic instead of a calm, structured response'],
      },
    ],
  },
  {
    id: 'singapore-airlines-bank',
    airline: 'Singapore Airlines',
    description: 'Premium Asian carrier renowned worldwide for the "Singapore Girl" service ethos and meticulous standards.',
    country: 'Singapore',
    difficulty: 3,
    questions: [
      {
        id: 'sq-q-1',
        airline: 'Singapore Airlines',
        category: 'hr',
        question: 'Singapore Airlines is famous for its exceptional service culture. What does that mean to you?',
        difficulty: 2,
        modelAnswers: [
          {
            answer:
              'To me, it means service that is graceful, attentive, and consistent, even in small details like posture, tone of voice, and timing. It is about anticipating a passenger\'s needs quietly, without being intrusive, and always maintaining composure and warmth. I admire how the airline trains crew to combine genuine care with a very high level of polish and discipline.',
            scoreBreakdown: { pronunciation: 87, grammar: 91, vocabulary: 90, fluency: 87, confidence: 88, professionalism: 92 },
          },
        ],
        mistakesToAvoid: ['Giving a generic answer not specific to SIA', 'Not mentioning composure or attentiveness', 'Sounding uninterested in high standards'],
      },
      {
        id: 'sq-q-2',
        airline: 'Singapore Airlines',
        category: 'situational',
        question: 'A passenger complains that your colleague was rude to them earlier in the flight. How do you respond?',
        difficulty: 2,
        modelAnswers: [
          {
            answer:
              'I would listen carefully and apologize sincerely on behalf of the crew, without making excuses or criticizing my colleague in front of the passenger. I would ask what happened so I understand the situation and try to resolve their concern directly. Afterwards, I would discuss it privately and professionally with my colleague and inform the senior crew member if necessary.',
            scoreBreakdown: { pronunciation: 87, grammar: 91, vocabulary: 89, fluency: 87, confidence: 88, professionalism: 92 },
          },
        ],
        mistakesToAvoid: ['Criticizing the colleague in front of the passenger', 'Dismissing the complaint', 'Not following up afterward'],
      },
      {
        id: 'sq-q-3',
        airline: 'Singapore Airlines',
        category: 'behavioral',
        question: 'Tell us about a time your attention to detail made a real difference.',
        difficulty: 2,
        modelAnswers: [
          {
            answer:
              'While preparing a table setting for a formal event, I noticed a small stain on one of the tablecloths that others had missed. I quietly replaced it before guests arrived, avoiding what could have been an embarrassing detail during an important dinner. It reminded me that noticing and correcting small details before they become visible problems is a core part of professional service.',
            scoreBreakdown: { pronunciation: 86, grammar: 90, vocabulary: 88, fluency: 86, confidence: 87, professionalism: 91 },
          },
        ],
        mistakesToAvoid: ['Giving an example with no real detail-orientation', 'Exaggerating the significance of a minor task', 'Vague, generic storytelling'],
      },
      {
        id: 'sq-q-4',
        airline: 'Singapore Airlines',
        category: 'hr',
        question: 'How do you handle criticism or feedback about your performance?',
        difficulty: 1,
        modelAnswers: [
          {
            answer:
              'I welcome feedback as an opportunity to improve. I listen carefully without becoming defensive, ask clarifying questions if needed, and reflect on how I can apply it going forward. I believe the best professionals are the ones who continue learning throughout their career, and constructive feedback is one of the most valuable tools for growth.',
            scoreBreakdown: { pronunciation: 86, grammar: 90, vocabulary: 88, fluency: 86, confidence: 88, professionalism: 90 },
          },
        ],
        mistakesToAvoid: ['Sounding defensive about criticism', 'Claiming you have never received negative feedback', 'Not explaining how you apply feedback'],
      },
      {
        id: 'sq-q-5',
        airline: 'Singapore Airlines',
        category: 'situational',
        question: 'You have very little time between flights during a quick turnaround. How would you stay organized?',
        difficulty: 2,
        modelAnswers: [
          {
            answer:
              'I would follow a clear mental checklist - safety checks, cabin cleanliness, catering, and personal readiness - completing each step efficiently without skipping anything. I would communicate with my team to divide tasks so we work in parallel rather than duplicating effort, keeping calm and focused even under time pressure.',
            scoreBreakdown: { pronunciation: 86, grammar: 90, vocabulary: 88, fluency: 86, confidence: 87, professionalism: 90 },
          },
        ],
        mistakesToAvoid: ['Suggesting you would skip safety steps to save time', 'Not mentioning teamwork or communication', 'Sounding disorganized under pressure'],
      },
      {
        id: 'sq-q-6',
        airline: 'Singapore Airlines',
        category: 'technical',
        question: 'What is the correct posture and technique for demonstrating the life vest during the safety briefing?',
        difficulty: 2,
        modelAnswers: [
          {
            answer:
              'I would hold the life vest so it is clearly visible to all passengers, demonstrating each step slowly and deliberately - placing it over the head, securing the straps, and showing where and how to inflate it, including the manual inflation tube. I would maintain upright, confident posture and make sure my movements are large and clear enough to be seen from every seat.',
            scoreBreakdown: { pronunciation: 87, grammar: 91, vocabulary: 90, fluency: 86, confidence: 87, professionalism: 91 },
          },
        ],
        mistakesToAvoid: ['Rushing through the demonstration', 'Holding the equipment where it cannot be seen', 'Missing the manual inflation tube step'],
      },
      {
        id: 'sq-q-7',
        airline: 'Singapore Airlines',
        category: 'behavioral',
        question: 'Describe a time you had to prioritize multiple urgent tasks at once.',
        difficulty: 2,
        modelAnswers: [
          {
            answer:
              'During a busy dinner shift, I had two tables requesting their bills at the same time as a new group arriving unexpectedly. I quickly assessed which task was most time-sensitive, communicated a short wait politely to the new arrivals, and handled the bills efficiently before greeting them personally. Prioritizing clearly, while communicating honestly with everyone, kept the situation under control.',
            scoreBreakdown: { pronunciation: 85, grammar: 89, vocabulary: 87, fluency: 85, confidence: 87, professionalism: 89 },
          },
        ],
        mistakesToAvoid: ['Describing a situation where tasks were dropped entirely', 'Not explaining your prioritization method', 'Sounding overwhelmed rather than in control'],
      },
      {
        id: 'sq-q-8',
        airline: 'Singapore Airlines',
        category: 'hr',
        question: 'What are your career goals, and how does this role fit into them?',
        difficulty: 1,
        modelAnswers: [
          {
            answer:
              'My goal is to build a long-term career in aviation, starting as cabin crew and growing into a senior or training role over time. I see this position as the perfect starting point to develop world-class service skills, cultural awareness, and leadership experience, all within an airline known for investing in its people\'s development.',
            scoreBreakdown: { pronunciation: 86, grammar: 90, vocabulary: 88, fluency: 86, confidence: 88, professionalism: 90 },
          },
        ],
        mistakesToAvoid: ['Saying the role is just temporary or a stepping stone elsewhere', 'Having no clear goals at all', 'Not connecting your goals to the airline'],
      },
      {
        id: 'sq-q-9',
        airline: 'Singapore Airlines',
        category: 'language',
        question: 'How would you politely correct a passenger who mispronounces a destination or misunderstands flight information?',
        difficulty: 1,
        modelAnswers: [
          {
            answer:
              'I would gently confirm the correct information in a warm, non-judgmental tone, for example saying "Just to confirm, we will be landing in..." rather than directly pointing out their mistake. The goal is to make sure they have accurate information without making them feel embarrassed or corrected harshly.',
            scoreBreakdown: { pronunciation: 86, grammar: 90, vocabulary: 88, fluency: 86, confidence: 87, professionalism: 90 },
          },
        ],
        mistakesToAvoid: ['Correcting the passenger bluntly', 'Making the passenger feel embarrassed', 'Failing to actually clarify the correct information'],
      },
      {
        id: 'sq-q-10',
        airline: 'Singapore Airlines',
        category: 'situational',
        question: 'A passenger has fallen asleep and missed the meal service, but wakes up hungry near the end of the flight. What would you do?',
        difficulty: 1,
        modelAnswers: [
          {
            answer:
              'I would apologize for the missed service and check what options are still available, even if it means offering a snack or a simplified version of the meal rather than nothing at all. I would explain the situation kindly and make sure they feel looked after, rather than simply telling them the service has ended.',
            scoreBreakdown: { pronunciation: 85, grammar: 89, vocabulary: 87, fluency: 85, confidence: 87, professionalism: 89 },
          },
        ],
        mistakesToAvoid: ['Simply telling the passenger service is over', 'Showing no effort to find a solution', 'Being unsympathetic to the situation'],
      },
    ],
  },
  {
    id: 'turkish-airlines-bank',
    airline: 'Turkish Airlines',
    description: 'Istanbul-based carrier flying to more countries than any other airline, bridging Europe, Asia, Africa, and beyond.',
    country: 'Turkey',
    difficulty: 2,
    questions: [
      {
        id: 'thy-q-1',
        airline: 'Turkish Airlines',
        category: 'hr',
        question: 'Turkish Airlines flies to more countries than any other airline. Why does that appeal to you?',
        difficulty: 1,
        modelAnswers: [
          {
            answer:
              'I love the idea of experiencing an incredible variety of cultures and destinations through my work, from busy short-haul routes across Europe to long-haul flights to Asia, Africa, and the Americas. That range also means constantly meeting passengers from very different backgrounds, which I find exciting rather than challenging, and it fits my genuine love of travel and cultural exchange.',
            scoreBreakdown: { pronunciation: 85, grammar: 89, vocabulary: 87, fluency: 85, confidence: 87, professionalism: 89 },
          },
        ],
        mistakesToAvoid: ['Not knowing anything about the airline\'s network', 'Giving a generic answer', 'Sounding uninterested in diversity of destinations'],
      },
      {
        id: 'thy-q-2',
        airline: 'Turkish Airlines',
        category: 'behavioral',
        question: 'Describe a time you had to serve a large number of people in a short amount of time.',
        difficulty: 2,
        modelAnswers: [
          {
            answer:
              'During a conference I helped cater, over 200 guests needed to be served lunch within a tight 45-minute window. I organized the team into clear stations, kept communication quick and direct, and maintained a steady, efficient pace without rushing so much that service quality dropped. We served everyone on time, and the feedback was very positive despite the pressure.',
            scoreBreakdown: { pronunciation: 85, grammar: 89, vocabulary: 87, fluency: 85, confidence: 87, professionalism: 89 },
          },
        ],
        mistakesToAvoid: ['Suggesting quality dropped under time pressure', 'Not explaining how the team was organized', 'Vague description with no real numbers or detail'],
      },
      {
        id: 'thy-q-3',
        airline: 'Turkish Airlines',
        category: 'situational',
        question: 'Istanbul Airport is a major connection hub. A passenger is worried about missing a tight connection. What do you do?',
        difficulty: 2,
        modelAnswers: [
          {
            answer:
              'I would reassure them calmly and check the connection details, including the gate and estimated time, using the information available to crew. If we are running late, I would let them know about the airline\'s transfer assistance procedures at Istanbul Airport and, where possible, prioritize their disembarkation so they can move quickly to their next flight.',
            scoreBreakdown: { pronunciation: 86, grammar: 90, vocabulary: 88, fluency: 86, confidence: 87, professionalism: 90 },
          },
        ],
        mistakesToAvoid: ['Dismissing the passenger\'s concern', 'Giving no practical information or reassurance', 'Not knowing about connection assistance procedures'],
      },
      {
        id: 'thy-q-4',
        airline: 'Turkish Airlines',
        category: 'hr',
        question: 'How would you represent Turkish hospitality and culture to international passengers?',
        difficulty: 2,
        modelAnswers: [
          {
            answer:
              'Turkish hospitality is known for its warmth and generosity - making guests feel like they are being personally taken care of, not just served. I would bring that spirit into every interaction: genuine smiles, patience, and small thoughtful gestures, while also being professional and efficient. I want passengers to leave the flight with a positive impression of Turkish culture.',
            scoreBreakdown: { pronunciation: 85, grammar: 89, vocabulary: 87, fluency: 85, confidence: 87, professionalism: 89 },
          },
        ],
        mistakesToAvoid: ['Not understanding what is being asked', 'Giving a generic customer service answer with no cultural context', 'Sounding disconnected from the brand'],
      },
      {
        id: 'thy-q-5',
        airline: 'Turkish Airlines',
        category: 'behavioral',
        question: 'Tell us about a time you had to work with very little sleep or during unusual hours.',
        difficulty: 2,
        modelAnswers: [
          {
            answer:
              'I worked night shifts at a 24-hour call center for several months. It was demanding to adjust my sleep schedule, but I focused on good habits - consistent rest during the day, proper hydration, and short breaks to stay alert. I learned that discipline around rest and routine matters more than willpower alone when working irregular hours.',
            scoreBreakdown: { pronunciation: 85, grammar: 89, vocabulary: 87, fluency: 85, confidence: 86, professionalism: 88 },
          },
        ],
        mistakesToAvoid: ['Claiming irregular hours would not affect you at all', 'Not describing real coping strategies', 'Sounding unprepared for shift work'],
      },
      {
        id: 'thy-q-6',
        airline: 'Turkish Airlines',
        category: 'situational',
        question: 'A group of passengers is being loud and disruptive to others nearby. How do you handle it?',
        difficulty: 2,
        modelAnswers: [
          {
            answer:
              'I would approach the group politely and privately, explaining that other passengers are being disturbed and asking them to lower their voices. I would keep my tone friendly rather than confrontational. If the behavior continued or escalated, I would inform the senior crew member and, if necessary, involve the captain, always keeping safety and other passengers\' comfort in mind.',
            scoreBreakdown: { pronunciation: 86, grammar: 90, vocabulary: 88, fluency: 86, confidence: 87, professionalism: 90 },
          },
        ],
        mistakesToAvoid: ['Confronting the group aggressively', 'Ignoring the complaint from other passengers', 'Not escalating if the behavior continues'],
      },
      {
        id: 'thy-q-7',
        airline: 'Turkish Airlines',
        category: 'technical',
        question: 'What would you do if the cabin lighting and entertainment systems suddenly failed mid-flight?',
        difficulty: 2,
        modelAnswers: [
          {
            answer:
              'I would stay calm and reassure passengers that the crew is aware and looking into it, since a system fault does not necessarily indicate a safety issue. I would inform the senior crew member and flight deck as per procedure, use backup torches if needed for visibility, and keep communicating with passengers so they do not feel forgotten or alarmed during the disruption.',
            scoreBreakdown: { pronunciation: 86, grammar: 90, vocabulary: 89, fluency: 86, confidence: 87, professionalism: 90 },
          },
        ],
        mistakesToAvoid: ['Causing unnecessary alarm among passengers', 'Not informing the flight deck or senior crew', 'No plan for passenger communication during the fault'],
      },
      {
        id: 'thy-q-8',
        airline: 'Turkish Airlines',
        category: 'hr',
        question: 'What makes you unique as a candidate compared to others applying for this role?',
        difficulty: 1,
        modelAnswers: [
          {
            answer:
              'I bring a combination of genuine hospitality experience, strong language skills, and real composure under pressure from working in fast-paced customer-facing roles. I also adapt quickly to new environments and enjoy learning about different cultures, which I believe makes me a natural fit for a truly international airline like Turkish Airlines.',
            scoreBreakdown: { pronunciation: 85, grammar: 89, vocabulary: 87, fluency: 85, confidence: 88, professionalism: 89 },
          },
        ],
        mistakesToAvoid: ['Comparing yourself negatively to other candidates', 'Giving a generic, unspecific answer', 'Sounding arrogant rather than confident'],
      },
      {
        id: 'thy-q-9',
        airline: 'Turkish Airlines',
        category: 'language',
        question: 'Turkish Airlines serves passengers from a huge range of language backgrounds. How would you handle a flight where you don\'t share a language with many passengers?',
        difficulty: 2,
        modelAnswers: [
          {
            answer:
              'I would rely on clear, simple English supported by gestures, smiling, and patience, and use any translation tools or safety cards with pictures that are available. I would also check whether any crew members share a language with those passengers and coordinate together, since teamwork can bridge language gaps that one person alone might struggle with.',
            scoreBreakdown: { pronunciation: 85, grammar: 89, vocabulary: 87, fluency: 85, confidence: 86, professionalism: 89 },
          },
        ],
        mistakesToAvoid: ['Showing frustration at language barriers', 'Not mentioning teamwork or available tools', 'Assuming passengers should just understand English'],
      },
      {
        id: 'thy-q-10',
        airline: 'Turkish Airlines',
        category: 'behavioral',
        question: 'Tell us about a time you had to stay motivated during a repetitive or demanding routine.',
        difficulty: 1,
        modelAnswers: [
          {
            answer:
              'Working the same shift pattern at a busy retail store for over a year could feel repetitive, but I stayed motivated by focusing on the parts I genuinely enjoyed, like helping customers find exactly what they needed, and by setting small personal goals, like improving my product knowledge each month. Finding meaning in the details helped me stay engaged even in a routine job.',
            scoreBreakdown: { pronunciation: 85, grammar: 89, vocabulary: 87, fluency: 85, confidence: 86, professionalism: 88 },
          },
        ],
        mistakesToAvoid: ['Admitting to losing motivation with no recovery', 'Vague answer with no real strategy described', 'Sounding like routine work bores you easily'],
      },
    ],
  },
  {
    id: 'lufthansa-bank',
    airline: 'Lufthansa',
    description: 'Germany\'s flag carrier and one of Europe\'s largest airline groups, known for precision and punctuality.',
    country: 'Germany',
    difficulty: 2,
    questions: [
      {
        id: 'lh-q-1',
        airline: 'Lufthansa',
        category: 'hr',
        question: 'Lufthansa is known for precision and reliability. How do these values apply to you personally?',
        difficulty: 2,
        modelAnswers: [
          {
            answer:
              'Precision and reliability are values I take seriously in everything I do, from arriving early to shifts to double-checking details before handing off work. I believe passengers trust an airline most when procedures are followed consistently and communication is clear and accurate. I would bring that same discipline and dependability to every flight.',
            scoreBreakdown: { pronunciation: 86, grammar: 90, vocabulary: 88, fluency: 86, confidence: 87, professionalism: 90 },
          },
        ],
        mistakesToAvoid: ['Giving an answer unrelated to reliability or precision', 'Providing no concrete personal example', 'Sounding casual about punctuality'],
      },
      {
        id: 'lh-q-2',
        airline: 'Lufthansa',
        category: 'situational',
        question: 'A flight is delayed on the ground for two hours due to a technical issue. How do you keep passengers informed and calm?',
        difficulty: 2,
        modelAnswers: [
          {
            answer:
              'I would provide regular, honest updates even if there is not much new information, since silence tends to increase anxiety more than a simple "we are still waiting for an update" message. I would offer water or refreshments if permitted, remain visibly calm and approachable, and answer individual questions patiently, always following the information given by the flight deck.',
            scoreBreakdown: { pronunciation: 86, grammar: 90, vocabulary: 88, fluency: 86, confidence: 87, professionalism: 90 },
          },
        ],
        mistakesToAvoid: ['Leaving passengers with no updates at all', 'Guessing at information you do not actually have', 'Becoming visibly frustrated yourself'],
      },
      {
        id: 'lh-q-3',
        airline: 'Lufthansa',
        category: 'behavioral',
        question: 'Tell us about a time you noticed a small error before it became a bigger problem.',
        difficulty: 2,
        modelAnswers: [
          {
            answer:
              'While preparing an order for a client, I noticed a quantity mismatch between the invoice and what had actually been packed. I caught it before the shipment went out, corrected it immediately, and informed my supervisor to update our records. It would have caused a serious problem for the client and our reputation if it had gone unnoticed.',
            scoreBreakdown: { pronunciation: 85, grammar: 89, vocabulary: 87, fluency: 85, confidence: 87, professionalism: 89 },
          },
        ],
        mistakesToAvoid: ['Describing an error you missed rather than caught', 'No explanation of how you fixed it', 'Downplaying the importance of the catch'],
      },
      {
        id: 'lh-q-4',
        airline: 'Lufthansa',
        category: 'hr',
        question: 'What languages do you speak, and how would that help you as Lufthansa crew?',
        difficulty: 1,
        modelAnswers: [
          {
            answer:
              'I speak fluent English and intermediate German, which I have been actively improving because I know it is valued at Lufthansa. Being able to greet and reassure German-speaking passengers in their own language, even with simple phrases, creates an immediate sense of comfort and trust, and I am committed to continuing to improve my German further.',
            scoreBreakdown: { pronunciation: 85, grammar: 89, vocabulary: 87, fluency: 85, confidence: 87, professionalism: 89 },
          },
        ],
        mistakesToAvoid: ['Showing no interest in learning German', 'Overstating language ability that cannot be backed up', 'Not connecting language skills to the passenger experience'],
      },
      {
        id: 'lh-q-5',
        airline: 'Lufthansa',
        category: 'situational',
        question: 'A passenger insists on keeping a large bag at their feet despite it exceeding the allowed size for takeoff. What do you do?',
        difficulty: 2,
        modelAnswers: [
          {
            answer:
              'I would explain politely but firmly that the bag must be stowed properly for takeoff for safety reasons, offering to help find space in the overhead bin. I would stay calm and clear about the rule while being understanding of their concern about the item, and if they continued to refuse, I would inform the senior crew member, since this is a safety requirement, not optional.',
            scoreBreakdown: { pronunciation: 86, grammar: 90, vocabulary: 88, fluency: 86, confidence: 87, professionalism: 90 },
          },
        ],
        mistakesToAvoid: ['Allowing the safety rule to be ignored', 'Being unnecessarily harsh', 'Not offering to help find a solution'],
      },
      {
        id: 'lh-q-6',
        airline: 'Lufthansa',
        category: 'technical',
        question: 'Why is it important to complete all safety checks exactly as trained, even under time pressure?',
        difficulty: 2,
        modelAnswers: [
          {
            answer:
              'Safety checks exist because they have been carefully designed to catch issues that could otherwise go unnoticed, and skipping even one step, even under time pressure, could allow a serious problem to be missed. Consistency is what makes the checks reliable - if crew only sometimes follow them fully, the whole system becomes less trustworthy. I would never cut corners on safety, regardless of time constraints.',
            scoreBreakdown: { pronunciation: 87, grammar: 91, vocabulary: 90, fluency: 87, confidence: 88, professionalism: 92 },
          },
        ],
        mistakesToAvoid: ['Suggesting checks could be skipped when busy', 'Not explaining why consistency matters', 'Giving a shallow, one-line answer'],
      },
      {
        id: 'lh-q-7',
        airline: 'Lufthansa',
        category: 'behavioral',
        question: 'Describe a time you had to give clear instructions to a group of people under time pressure.',
        difficulty: 2,
        modelAnswers: [
          {
            answer:
              'During a fire drill at my previous workplace, I was responsible for directing my section of colleagues to the correct exit. I used short, clear, confident instructions and made sure to check that everyone understood before moving on. Staying calm and speaking clearly helped the group move quickly and safely without confusion.',
            scoreBreakdown: { pronunciation: 86, grammar: 90, vocabulary: 88, fluency: 86, confidence: 88, professionalism: 90 },
          },
        ],
        mistakesToAvoid: ['Describing confusing or unclear instructions', 'Not mentioning checking for understanding', 'Sounding panicked rather than in control'],
      },
      {
        id: 'lh-q-8',
        airline: 'Lufthansa',
        category: 'hr',
        question: 'How do you stay motivated when performing the same safety procedures on every single flight?',
        difficulty: 1,
        modelAnswers: [
          {
            answer:
              'I remind myself that even though I have done the procedure many times, it may be the first time a particular passenger has heard it, and their safety depends on me delivering it with full attention every time. Treating every flight as equally important, not routine, keeps me motivated and focused rather than complacent.',
            scoreBreakdown: { pronunciation: 86, grammar: 90, vocabulary: 88, fluency: 86, confidence: 87, professionalism: 90 },
          },
        ],
        mistakesToAvoid: ['Admitting to becoming complacent over time', 'No genuine reasoning for staying engaged', 'Downplaying the importance of repeated procedures'],
      },
      {
        id: 'lh-q-9',
        airline: 'Lufthansa',
        category: 'situational',
        question: 'You realize partway through the flight that you gave a passenger the wrong information about their connecting gate. What do you do?',
        difficulty: 2,
        modelAnswers: [
          {
            answer:
              'I would go back to the passenger as soon as possible, apologize honestly for the mistake, and provide the correct information clearly. I would rather admit the error immediately than let them find out later and potentially miss their connection, since honesty and quick correction matter more than avoiding an awkward moment.',
            scoreBreakdown: { pronunciation: 85, grammar: 89, vocabulary: 87, fluency: 85, confidence: 87, professionalism: 90 },
          },
        ],
        mistakesToAvoid: ['Not correcting the mistake at all', 'Waiting too long to inform the passenger', 'Being defensive about the error'],
      },
      {
        id: 'lh-q-10',
        airline: 'Lufthansa',
        category: 'language',
        question: 'How would you make a formal safety announcement sound professional but not robotic?',
        difficulty: 2,
        modelAnswers: [
          {
            answer:
              'I would focus on natural pacing and genuine tone rather than reciting the words mechanically - pausing slightly at key points, varying my intonation, and keeping my posture relaxed but attentive. Even formal, repeated announcements can sound sincere if delivered with real presence rather than as a memorized script.',
            scoreBreakdown: { pronunciation: 87, grammar: 90, vocabulary: 89, fluency: 87, confidence: 87, professionalism: 90 },
          },
        ],
        mistakesToAvoid: ['Speaking in a flat, monotone voice', 'Rushing through the announcement', 'Sounding disengaged from the content'],
      },
    ],
  },
  {
    id: 'ryanair-bank',
    airline: 'Ryanair',
    description: 'Europe\'s largest low-cost carrier, known for high-frequency short-haul flying and fast turnarounds.',
    country: 'Ireland',
    difficulty: 1,
    questions: [
      {
        id: 'fr-q-1',
        airline: 'Ryanair',
        category: 'hr',
        question: 'Ryanair operates a very fast-paced, high-volume model. How do you feel about that pace of work?',
        difficulty: 1,
        modelAnswers: [
          {
            answer:
              'I enjoy working in a fast-paced environment - it keeps me energized and focused. I have experience in busy retail and hospitality roles where quick turnarounds and constant activity were the norm, and I thrive when there is a clear routine to follow efficiently. I see Ryanair\'s pace as exciting rather than overwhelming.',
            scoreBreakdown: { pronunciation: 84, grammar: 88, vocabulary: 86, fluency: 84, confidence: 87, professionalism: 88 },
          },
        ],
        mistakesToAvoid: ['Saying you prefer a slow-paced environment', 'Not giving a relevant example of handling a fast pace', 'Sounding hesitant about the workload'],
      },
      {
        id: 'fr-q-2',
        airline: 'Ryanair',
        category: 'situational',
        question: 'The aircraft has just landed and you have only 25 minutes to prepare the cabin for the next flight. What is your approach?',
        difficulty: 2,
        modelAnswers: [
          {
            answer:
              'I would move quickly and efficiently through a clear routine: clearing rubbish, checking seat pockets and seatbelts, restocking essentials, and doing a final safety check, all while communicating with the team to divide the cabin into sections so we work in parallel. Staying organized and not skipping any safety steps, even under time pressure, would be my priority.',
            scoreBreakdown: { pronunciation: 84, grammar: 88, vocabulary: 86, fluency: 84, confidence: 86, professionalism: 88 },
          },
        ],
        mistakesToAvoid: ['Suggesting safety checks could be skipped to save time', 'Not mentioning teamwork', 'Sounding disorganized under pressure'],
      },
      {
        id: 'fr-q-3',
        airline: 'Ryanair',
        category: 'behavioral',
        question: 'Ryanair crew often sell onboard products during the flight. Tell us about a time you had to sell something to a customer.',
        difficulty: 2,
        modelAnswers: [
          {
            answer:
              'While working in retail, I regularly recommended add-on products to customers, focusing on genuinely useful suggestions rather than just pushing sales. I would describe the benefit clearly and briefly, read the customer\'s interest, and never pressure anyone who said no. This approach consistently helped me meet sales targets while keeping customers happy.',
            scoreBreakdown: { pronunciation: 84, grammar: 88, vocabulary: 86, fluency: 84, confidence: 86, professionalism: 87 },
          },
        ],
        mistakesToAvoid: ['Saying you dislike or are uncomfortable with sales', 'No real example of selling experience', 'Describing pushy or pressuring sales behavior'],
      },
      {
        id: 'fr-q-4',
        airline: 'Ryanair',
        category: 'hr',
        question: 'Why do you want to work for a low-cost airline rather than a premium carrier?',
        difficulty: 1,
        modelAnswers: [
          {
            answer:
              'I am drawn to the energy and efficiency of a low-cost model - the fast pace, the variety of short flights, and the opportunity to interact with a huge number of passengers regularly. I also appreciate that the role rewards initiative, especially with onboard sales, and I like that every day brings a different mix of routes and passengers.',
            scoreBreakdown: { pronunciation: 84, grammar: 88, vocabulary: 86, fluency: 84, confidence: 86, professionalism: 87 },
          },
        ],
        mistakesToAvoid: ['Implying you see this as a lesser option', 'Sounding like you only want a premium carrier eventually', 'No genuine reasoning given'],
      },
      {
        id: 'fr-q-5',
        airline: 'Ryanair',
        category: 'situational',
        question: 'A passenger becomes annoyed that snacks and drinks are not free on board. How do you respond?',
        difficulty: 1,
        modelAnswers: [
          {
            answer:
              'I would explain politely and with a smile that this is how we keep ticket prices low for everyone, and I would offer to show them the menu of options available for purchase. Staying friendly and matter-of-fact, rather than defensive, usually helps passengers understand and accept the model without further frustration.',
            scoreBreakdown: { pronunciation: 84, grammar: 87, vocabulary: 85, fluency: 84, confidence: 86, professionalism: 87 },
          },
        ],
        mistakesToAvoid: ['Being defensive or dismissive', 'Not offering an alternative or explanation', 'Sounding irritated by the question'],
      },
      {
        id: 'fr-q-6',
        airline: 'Ryanair',
        category: 'behavioral',
        question: 'Tell us about a time you had to stay positive despite a stressful day at work.',
        difficulty: 1,
        modelAnswers: [
          {
            answer:
              'During a particularly hectic holiday shopping season, the store was constantly busy with long queues and frustrated customers. I focused on staying friendly and upbeat with each customer individually, taking short mental resets between interactions. By the end of the day, several customers commented on how helpful and cheerful the staff had been despite how busy it was.',
            scoreBreakdown: { pronunciation: 83, grammar: 87, vocabulary: 85, fluency: 83, confidence: 86, professionalism: 87 },
          },
        ],
        mistakesToAvoid: ['Admitting your mood affected your service', 'No concrete strategy for staying positive', 'Sounding worn down rather than resilient'],
      },
      {
        id: 'fr-q-7',
        airline: 'Ryanair',
        category: 'situational',
        question: 'A passenger tries to board with hand luggage clearly larger than the allowed size. What do you do?',
        difficulty: 1,
        modelAnswers: [
          {
            answer:
              'I would politely explain the size restriction and inform them it will need to be checked into the hold, following standard procedure. I would keep my tone friendly and matter-of-fact rather than confrontational, since most passengers accept the rule once it is explained clearly and calmly.',
            scoreBreakdown: { pronunciation: 84, grammar: 87, vocabulary: 85, fluency: 84, confidence: 86, professionalism: 87 },
          },
        ],
        mistakesToAvoid: ['Making an exception to avoid conflict', 'Being rude when enforcing the rule', 'Not explaining the reason clearly'],
      },
      {
        id: 'fr-q-8',
        airline: 'Ryanair',
        category: 'hr',
        question: 'How do you handle working with a new crew almost every single flight?',
        difficulty: 1,
        modelAnswers: [
          {
            answer:
              'I enjoy meeting new people and adapt quickly to new teams. I make a point of introducing myself warmly at the pre-flight briefing, listening carefully to instructions, and being proactive about helping wherever needed. I believe a positive, flexible attitude makes it easy to work smoothly with any crew, even people I have just met.',
            scoreBreakdown: { pronunciation: 84, grammar: 88, vocabulary: 86, fluency: 84, confidence: 87, professionalism: 88 },
          },
        ],
        mistakesToAvoid: ['Saying you prefer working with the same fixed team', 'Sounding uncomfortable meeting new people', 'No mention of the pre-flight briefing or introductions'],
      },
      {
        id: 'fr-q-9',
        airline: 'Ryanair',
        category: 'technical',
        question: 'Why are quick, efficient boarding procedures especially important for a low-cost, high-frequency airline?',
        difficulty: 2,
        modelAnswers: [
          {
            answer:
              'Fast turnarounds are essential to the low-cost model, since keeping aircraft on the ground for as little time as possible allows more flights per day and keeps costs, and therefore fares, low. Efficient boarding also reduces the chance of delays affecting the rest of the day\'s schedule, which is why crew need to be organized, clear with instructions, and quick to resolve any hold-ups.',
            scoreBreakdown: { pronunciation: 85, grammar: 89, vocabulary: 87, fluency: 85, confidence: 86, professionalism: 88 },
          },
        ],
        mistakesToAvoid: ['Not connecting the answer to the business model', 'Vague or generic explanation', 'Missing the link to on-time performance'],
      },
      {
        id: 'fr-q-10',
        airline: 'Ryanair',
        category: 'behavioral',
        question: 'Describe a time you had to handle several passenger requests at once during a very short flight.',
        difficulty: 2,
        modelAnswers: [
          {
            answer:
              'On a similarly fast-paced retail floor, I once had three customers needing help simultaneously during a rush. I quickly acknowledged each one so they knew they had been seen, then handled requests in a logical order based on urgency and how quickly each could be resolved. Acknowledging everyone immediately, even briefly, kept people patient while I worked through the queue.',
            scoreBreakdown: { pronunciation: 84, grammar: 88, vocabulary: 86, fluency: 84, confidence: 86, professionalism: 87 },
          },
        ],
        mistakesToAvoid: ['Ignoring some passengers while helping others', 'Not explaining a clear prioritization approach', 'Sounding overwhelmed by multiple requests'],
      },
    ],
  },
];

/**
 * General HR & Behavioral Questions
 * Common across most airlines - covers the standard interview topics.
 */
export const generalHRQuestions: InterviewQuestion[] = [
  {
    id: 'gen-hr-1',
    category: 'hr',
    question: 'What are your strengths and weaknesses?',
    difficulty: 1,
    modelAnswers: [
      {
        answer:
          'My strengths include strong interpersonal skills, the ability to remain calm under pressure, and excellent attention to detail. I am also adaptable and quick to learn new procedures. As for weaknesses, I tend to be a perfectionist, which sometimes means I spend extra time on tasks to ensure quality. However, I have learned to balance this by prioritizing tasks effectively and asking for help when needed.',
        scoreBreakdown: { pronunciation: 86, grammar: 90, vocabulary: 87, fluency: 85, confidence: 88, professionalism: 89 },
      },
    ],
    mistakesToAvoid: ['Mentioning a weakness that is critical for the job', 'Being overly self-critical', 'Trying to disguise a weakness as a strength'],
  },
  {
    id: 'gen-hr-2',
    category: 'hr',
    question: 'Describe your previous work experience in customer service.',
    difficulty: 1,
    modelAnswers: [
      {
        answer:
          'I have three years of experience in customer service roles. I started as a restaurant server, where I learned how to manage multiple tasks and ensure guest satisfaction. Later, I worked at a hotel front desk, handling guest inquiries and resolving complaints professionally. Most recently, I worked in retail management, where I supervised staff and maintained high service standards.',
        scoreBreakdown: { pronunciation: 85, grammar: 91, vocabulary: 88, fluency: 84, confidence: 87, professionalism: 88 },
      },
    ],
    mistakesToAvoid: ['Criticizing previous employers', 'Being vague about responsibilities', 'Not highlighting relevant skills'],
  },
  {
    id: 'gen-hr-3',
    category: 'behavioral',
    question: 'Tell us about a time when you worked as part of a team.',
    difficulty: 2,
    modelAnswers: [
      {
        answer:
          'During a particularly busy shift at the hotel, our staff was short-handed due to unexpected absences. Instead of complaining, my team and I worked together closely to ensure guests still received excellent service. We communicated effectively, helped each other with tasks, and remained positive despite the pressure. By the end of the shift, we had successfully served all guests without compromising quality.',
        scoreBreakdown: { pronunciation: 87, grammar: 92, vocabulary: 89, fluency: 86, confidence: 88, professionalism: 90 },
      },
    ],
    mistakesToAvoid: ['Focusing only on yourself', 'Not showing collaboration', 'Criticizing team members'],
  },
  {
    id: 'gen-hr-4',
    category: 'hr',
    question: 'Why do you want to be cabin crew?',
    difficulty: 1,
    modelAnswers: [
      {
        answer:
          'I want to be cabin crew because it combines everything I love: travel, meeting people from all over the world, and providing genuine hospitality. I find real satisfaction in taking care of others and making sure they feel safe and comfortable. This career also offers constant growth, new experiences, and the chance to represent an airline I truly admire.',
        scoreBreakdown: { pronunciation: 86, grammar: 90, vocabulary: 88, fluency: 86, confidence: 88, professionalism: 89 },
      },
    ],
    mistakesToAvoid: ["Focusing only on free travel or perks", 'Giving a shallow or rehearsed-sounding answer', 'Not mentioning genuine interest in people or service'],
  },
  {
    id: 'gen-hr-5',
    category: 'hr',
    question: 'What do you know about our airline?',
    difficulty: 1,
    modelAnswers: [
      {
        answer:
          'I researched the airline thoroughly before applying. I know its main hub, the size of its fleet and network, its reputation in the industry, and some of its recent achievements or initiatives. I also looked into the crew culture and values, since I want to make sure I am a good fit for the airline\'s specific approach to service.',
        scoreBreakdown: { pronunciation: 85, grammar: 89, vocabulary: 87, fluency: 85, confidence: 87, professionalism: 88 },
      },
    ],
    mistakesToAvoid: ['Showing no research into the airline', 'Confusing it with a competitor', 'Giving only vague, generic information'],
  },
  {
    id: 'gen-hr-6',
    category: 'behavioral',
    question: 'How do you handle stress?',
    difficulty: 1,
    modelAnswers: [
      {
        answer:
          'I handle stress by staying organized and breaking tasks down into manageable steps rather than feeling overwhelmed by everything at once. I also focus on my breathing and keep a calm, steady tone of voice, since I have found that visibly staying calm helps everyone around me stay calm too. After a stressful shift, I make time to properly rest and recover.',
        scoreBreakdown: { pronunciation: 86, grammar: 90, vocabulary: 88, fluency: 86, confidence: 87, professionalism: 89 },
      },
    ],
    mistakesToAvoid: ['Claiming you never feel stressed', 'Describing an unhealthy coping mechanism', 'Not giving any concrete strategy'],
  },
  {
    id: 'gen-hr-7',
    category: 'behavioral',
    question: 'What is your greatest achievement?',
    difficulty: 1,
    modelAnswers: [
      {
        answer:
          'My greatest achievement was earning a promotion to shift supervisor within my first year at a demanding retail job, ahead of colleagues with more experience. It required consistently exceeding expectations, taking initiative, and learning to lead a team. It taught me that hard work and a positive attitude are recognized, and it gave me real confidence in my leadership ability.',
        scoreBreakdown: { pronunciation: 86, grammar: 90, vocabulary: 88, fluency: 86, confidence: 88, professionalism: 89 },
      },
    ],
    mistakesToAvoid: ['Choosing an achievement unrelated to growth or effort', 'Being overly modest and downplaying it', 'Not explaining why it matters to you'],
  },
  {
    id: 'gen-hr-8',
    category: 'hr',
    question: 'How do you maintain high standards even when no one is watching?',
    difficulty: 2,
    modelAnswers: [
      {
        answer:
          'I hold myself to the same standard regardless of supervision, because I believe consistency is what builds trust with both colleagues and customers. I set my own personal checklist for quality and follow it every time, and I remind myself that the person I am serving deserves my full effort whether or not anyone else notices.',
        scoreBreakdown: { pronunciation: 86, grammar: 90, vocabulary: 88, fluency: 86, confidence: 87, professionalism: 90 },
      },
    ],
    mistakesToAvoid: ['Implying standards drop without supervision', 'Vague answer with no real system described', 'Sounding insincere'],
  },
  {
    id: 'gen-hr-9',
    category: 'behavioral',
    question: 'Tell us about a time you made a mistake at work. How did you handle it?',
    difficulty: 2,
    modelAnswers: [
      {
        answer:
          'I once sent a client an invoice with an incorrect amount due to a data entry error. As soon as I noticed, I contacted the client immediately, apologized, and sent the corrected invoice with a clear explanation. I also double-checked our process afterward to understand where the mistake happened and added an extra verification step to prevent it from happening again.',
        scoreBreakdown: { pronunciation: 86, grammar: 90, vocabulary: 88, fluency: 86, confidence: 87, professionalism: 90 },
      },
    ],
    mistakesToAvoid: ['Claiming you never make mistakes', 'Not explaining how you fixed it', 'Blaming others for the error'],
  },
  {
    id: 'gen-hr-10',
    category: 'hr',
    question: 'How do you stay motivated during long or repetitive shifts?',
    difficulty: 1,
    modelAnswers: [
      {
        answer:
          'I focus on the parts of the job that genuinely matter to me, like the individual interactions with customers, rather than the repetition of the tasks themselves. I also set small personal goals throughout a shift, like aiming to leave every customer with a positive impression, which keeps me engaged even during quieter or more routine moments.',
        scoreBreakdown: { pronunciation: 85, grammar: 89, vocabulary: 87, fluency: 85, confidence: 87, professionalism: 88 },
      },
    ],
    mistakesToAvoid: ['Admitting motivation drops significantly over time', 'No real strategy given', 'Sounding disengaged from the work itself'],
  },
  {
    id: 'gen-hr-11',
    category: 'hr',
    question: 'How do you maintain a professional appearance at all times?',
    difficulty: 1,
    modelAnswers: [
      {
        answer:
          'I prepare thoroughly before every shift, making sure my uniform is clean and pressed and my grooming meets standard requirements. I keep a small kit with essentials for quick touch-ups during long days, and I remind myself that my appearance reflects both my own professionalism and the company I represent.',
        scoreBreakdown: { pronunciation: 85, grammar: 89, vocabulary: 87, fluency: 85, confidence: 87, professionalism: 89 },
      },
    ],
    mistakesToAvoid: ['Sounding careless about grooming standards', 'No mention of preparation', 'Treating the question as unimportant'],
  },
  {
    id: 'gen-hr-12',
    category: 'behavioral',
    question: 'Describe your teamwork experience in a previous role.',
    difficulty: 1,
    modelAnswers: [
      {
        answer:
          'In my last role, I worked closely with a small team to manage daily operations, from opening procedures to handling busy periods together. I always tried to communicate clearly, offer help proactively when a colleague was overwhelmed, and stay open to feedback. I believe good teamwork comes from consistently supporting each other, not just during emergencies.',
        scoreBreakdown: { pronunciation: 85, grammar: 89, vocabulary: 87, fluency: 85, confidence: 87, professionalism: 89 },
      },
    ],
    mistakesToAvoid: ['Focusing only on individual contributions', 'Vague answer with no real example', 'Speaking negatively about former teammates'],
  },
  {
    id: 'gen-hr-13',
    category: 'hr',
    question: 'What are your career goals for the next five years?',
    difficulty: 2,
    modelAnswers: [
      {
        answer:
          'In the next five years, I hope to grow from cabin crew into a more senior role, such as purser or a training position, building deep experience along the way. I want to keep developing my language skills and cultural knowledge, and eventually contribute to mentoring new crew members as they start their own journeys in aviation.',
        scoreBreakdown: { pronunciation: 86, grammar: 90, vocabulary: 88, fluency: 86, confidence: 87, professionalism: 89 },
      },
    ],
    mistakesToAvoid: ['Saying you plan to leave the industry soon', 'Having no clear goals at all', 'Goals unrelated to the airline or aviation'],
  },
  {
    id: 'gen-hr-14',
    category: 'situational',
    question: 'How do you handle a situation where a colleague is not pulling their weight?',
    difficulty: 2,
    modelAnswers: [
      {
        answer:
          'I would first speak to my colleague privately and respectfully, asking if everything is alright and offering to help, since there may be a reason I am not aware of. If the issue continued, I would raise it with the senior crew member through the proper channel, rather than letting frustration build silently or confronting them harshly.',
        scoreBreakdown: { pronunciation: 85, grammar: 89, vocabulary: 87, fluency: 85, confidence: 87, professionalism: 89 },
      },
    ],
    mistakesToAvoid: ['Confronting the colleague publicly or aggressively', 'Doing nothing and staying silent indefinitely', 'Gossiping about the colleague instead of addressing it'],
  },
  {
    id: 'gen-hr-15',
    category: 'language',
    question: 'Tell us about your language skills and how you have used them professionally.',
    difficulty: 1,
    modelAnswers: [
      {
        answer:
          'I am fluent in English and conversational in Spanish, which I used regularly while working at a hotel with many international guests. Being able to greet guests in their own language, even briefly, often made them feel more welcome and comfortable, and I am continuing to improve my Spanish and pick up basic phrases in other languages too.',
        scoreBreakdown: { pronunciation: 86, grammar: 90, vocabulary: 88, fluency: 86, confidence: 87, professionalism: 89 },
      },
    ],
    mistakesToAvoid: ['Overstating fluency you cannot demonstrate', 'Not giving a real example of using the language', 'Showing no interest in learning more languages'],
  },
  {
    id: 'gen-hr-16',
    category: 'behavioral',
    question: 'How do you adapt to new environments or unfamiliar situations?',
    difficulty: 1,
    modelAnswers: [
      {
        answer:
          'I approach new environments with curiosity rather than anxiety - I observe how things are done, ask questions when needed, and stay flexible about changing my usual approach. When I moved to a new city for work, I quickly built new routines and relationships by staying open-minded and proactive rather than waiting for things to feel familiar.',
        scoreBreakdown: { pronunciation: 85, grammar: 89, vocabulary: 87, fluency: 85, confidence: 87, professionalism: 88 },
      },
    ],
    mistakesToAvoid: ['Admitting difficulty adapting with no resolution', 'Vague answer with no real example', 'Sounding resistant to change'],
  },
  {
    id: 'gen-hr-17',
    category: 'hr',
    question: 'What is your understanding of excellent customer service?',
    difficulty: 1,
    modelAnswers: [
      {
        answer:
          'Excellent customer service means genuinely listening to what someone needs, anticipating their expectations, and delivering it with warmth and consistency, not just efficiency. It is about making people feel valued as individuals rather than just completing a transaction, and going the extra step when possible to turn a good experience into a memorable one.',
        scoreBreakdown: { pronunciation: 86, grammar: 90, vocabulary: 88, fluency: 86, confidence: 87, professionalism: 89 },
      },
    ],
    mistakesToAvoid: ['Giving a shallow, dictionary-style definition', 'Not connecting the answer to your own behavior', 'Focusing only on speed rather than care'],
  },
  {
    id: 'gen-hr-18',
    category: 'behavioral',
    question: 'How do you handle conflicts with colleagues?',
    difficulty: 2,
    modelAnswers: [
      {
        answer:
          'I address conflicts directly but calmly, usually by having a private conversation to understand the other person\'s perspective before explaining my own. I focus on finding a solution rather than assigning blame, and I try to resolve issues quickly so they do not affect the wider team or the quality of our work together.',
        scoreBreakdown: { pronunciation: 85, grammar: 89, vocabulary: 87, fluency: 85, confidence: 87, professionalism: 89 },
      },
    ],
    mistakesToAvoid: ['Claiming you never have conflicts', 'Describing an unresolved conflict', 'Speaking negatively about a specific person'],
  },
  {
    id: 'gen-hr-19',
    category: 'hr',
    question: 'Describe your cultural awareness and experience working with diverse groups of people.',
    difficulty: 2,
    modelAnswers: [
      {
        answer:
          'I have worked and studied alongside people from many different cultural backgrounds, which taught me to be observant, respectful, and open to different communication styles and customs. I try to avoid assumptions and instead ask questions or watch carefully to understand what makes someone comfortable, since I know that respect looks different across cultures.',
        scoreBreakdown: { pronunciation: 85, grammar: 89, vocabulary: 87, fluency: 85, confidence: 87, professionalism: 89 },
      },
    ],
    mistakesToAvoid: ['Making broad generalizations about cultures', 'Claiming you have no relevant experience', 'Sounding dismissive of cultural differences'],
  },
  {
    id: 'gen-hr-20',
    category: 'hr',
    question: 'What makes you unique as a candidate for this role?',
    difficulty: 2,
    modelAnswers: [
      {
        answer:
          'I bring a genuine passion for hospitality combined with real composure under pressure, developed through several years in fast-paced, customer-facing roles. I also adapt quickly, communicate clearly across cultures, and take real pride in the small details that make a service experience feel personal rather than routine.',
        scoreBreakdown: { pronunciation: 86, grammar: 90, vocabulary: 88, fluency: 86, confidence: 88, professionalism: 90 },
      },
    ],
    mistakesToAvoid: ['Giving a generic, unspecific answer', 'Comparing yourself negatively to others', 'Sounding arrogant rather than confident'],
  },
  {
    id: 'gen-hr-21',
    category: 'situational',
    question: 'How do you handle emergencies or unexpected situations at work?',
    difficulty: 2,
    modelAnswers: [
      {
        answer:
          'I stay calm and focus on the immediate priority rather than becoming overwhelmed by the whole situation at once. I follow trained procedures step by step, communicate clearly with anyone involved, and ask for help or escalate when needed rather than trying to handle everything alone. Staying composed helps me think clearly and reassures the people around me.',
        scoreBreakdown: { pronunciation: 86, grammar: 90, vocabulary: 88, fluency: 86, confidence: 88, professionalism: 90 },
      },
    ],
    mistakesToAvoid: ['Describing panic rather than a structured response', 'Not mentioning following procedure', 'Suggesting you would handle everything alone without help'],
  },
  {
    id: 'gen-hr-22',
    category: 'hr',
    question: 'Do you have any questions for us?',
    difficulty: 1,
    modelAnswers: [
      {
        answer:
          'Yes, thank you. Could you tell me more about the training programme new crew go through, and what ongoing development opportunities are available? I am also curious about what qualities have made your most successful crew members stand out. I want to make sure I am prepared to grow into the role as effectively as possible.',
        scoreBreakdown: { pronunciation: 85, grammar: 89, vocabulary: 87, fluency: 85, confidence: 88, professionalism: 90 },
      },
    ],
    mistakesToAvoid: ['Saying you have no questions at all', 'Asking only about salary or time off', 'Asking something easily found on the company website'],
  },
];

/**
 * Common Cabin Crew Interview Topics
 * Each topic maps to a question in generalHRQuestions or an airline bank so
 * it is directly practice-ready from the Topics view.
 */
export const interviewTopics: { label: string; questionId: string }[] = [
  { label: 'Tell us about yourself / why cabin crew', questionId: 'gen-hr-4' },
  { label: 'Why do you want to work for this airline?', questionId: 'gen-hr-5' },
  { label: 'Describe a difficult passenger situation', questionId: 'emirates-q-2' },
  { label: 'How do you handle stress?', questionId: 'gen-hr-6' },
  { label: 'What is your greatest achievement?', questionId: 'gen-hr-7' },
  { label: 'How do you maintain high standards?', questionId: 'gen-hr-8' },
  { label: 'Tell us about a time you made a mistake', questionId: 'gen-hr-9' },
  { label: 'How do you stay motivated?', questionId: 'gen-hr-10' },
  { label: 'What do you know about our airline?', questionId: 'gen-hr-5' },
  { label: 'How do you maintain professional appearance?', questionId: 'gen-hr-11' },
  { label: 'Describe your teamwork experience', questionId: 'gen-hr-12' },
  { label: 'What are your career goals?', questionId: 'gen-hr-13' },
  { label: 'How do you handle emergencies?', questionId: 'gen-hr-21' },
  { label: 'Tell us about your language skills', questionId: 'gen-hr-15' },
  { label: 'How do you adapt to new environments?', questionId: 'gen-hr-16' },
  { label: 'What is your understanding of customer service?', questionId: 'gen-hr-17' },
  { label: 'How do you handle conflicts with colleagues?', questionId: 'gen-hr-18' },
  { label: 'Describe your cultural awareness', questionId: 'gen-hr-19' },
  { label: 'What makes you unique as a candidate?', questionId: 'gen-hr-20' },
  { label: 'Strengths and weaknesses', questionId: 'gen-hr-1' },
  { label: 'Handling colleagues who underperform', questionId: 'gen-hr-14' },
  { label: 'Questions to ask the interviewer', questionId: 'gen-hr-22' },
];
