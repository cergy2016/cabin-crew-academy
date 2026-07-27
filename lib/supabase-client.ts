import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://muqkevgspfbocjftvszt.supabase.co';
const supabaseAnonKey = 'sb_publishable_g2Lvs2TKpDearxjOUCGcqw_zfmpb1r_';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
