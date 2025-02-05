
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://miaeuoknkostaopiidwb.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1pYWV1b2tua29zdGFvcGlpZHdiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg2MTczNjIsImV4cCI6MjA1NDE5MzM2Mn0.trKy3d_phNPc8Ha5Ntd9NtNSWhtwDCpcqgyKTC-x1o0'

export const supabase = createClient(supabaseUrl, supabaseKey)

