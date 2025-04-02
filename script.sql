CREATE TABLE synths (
	id SERIAL PRIMARY KEY,
	manufacturer VARCHAR(255) NOT NULL,
	model VARCHAR(255) NOT NULL,
	description TEXT,
	image_url TEXT, -- Added column for Cloudinary image URL
	times_selected INT DEFAULT 0,
	times_guessed INT DEFAULT 0,
	CONSTRAINT unique_synth UNIQUE (manufacturer, model)
);
create table players (
	id serial primary key,
	player_name varchar(255) not null unique
);
CREATE TABLE attempts (
	id SERIAL PRIMARY KEY,
	player_id INT NOT NULL,
	time_started TIMESTAMP NOT NULL,
	score FLOAT DEFAULT 0,
	CONSTRAINT score_check CHECK (score BETWEEN 0 AND 100),
	CONSTRAINT fk_player FOREIGN KEY (player_id) REFERENCES players(id)
);

/*get All synths*/
select * from synths
select manufacturer,model,description,image_url,times_selected,times_guessed from synths where id=5
delete from synths s 

select * from players
delete from players

/*get leaderboard*/
select p.player_name as Player, a.score as Score, to_char(a.time_started, 'Mon DD, YYYY') as Date, to_char(a.time_started, 'HH24:MI') as UTC_Time 
from attempts a, players p where a.player_id = p.id
order by a.score desc
limit 10

delete from attempts where score=0

/* update times */
update synths
set times_selected=times_selected +1, times_guessed=times_guessed +1
where id=80

delete from synths;
delete from attempts; 
delete from players;


INSERT INTO synths (manufacturer, model, description, image_url)
values
 	('Access', 'Virus TI2', 'Powerful digital-analog hybrid synthesizer known for its lush sounds and deep modulation capabilities.', 'access_virusti2.jpg'),
	('Acetone', 'Rhythm Ace', 'Classic analog drum machine with preset rhythms, a predecessor to Roland’s TR series.', 'acetone_rhythm-ace.jpg'),  
    ('Akai', 'MPC 3000', 'Classic drum machine and sampler from Akai.', 'akai_mpc3000.jpg'),
    ('Akai', 'MPC 60', 'Legendary drum machine and sampler, co-designed by Roger Linn.', 'akai_mpc60.jpg'),
    ('Akai', 'S900', '12-bit sampler widely used in the late 80s.', 'akai_s900.jpg'),
    ('Akai', 'AX80', 'Vintage 8-voice analog synthesizer with a unique fluorescent display.', 'akai_ax80.jpg'),
    ('Alesis', 'HR-16', 'Classic late-80s drum machine with punchy PCM samples and a built-in sequencer.', 'alesis_hr16.jpg'),  
	('Alesis', 'SR-16', 'Highly popular drum machine known for its dynamic, realistic drum sounds and versatility.', 'alesis_sr16.jpg'),
    ('ARP', 'Odyssey', 'Iconic duophonic analog synthesizer.', 'arp-odyssey.jpg'),      
    ('ARP', '2600', 'Semi-modular analog synthesizer, famous for its flexibility.', 'arp_2600.jpg'),
    ('ARP', 'Axxe', 'Monophonic analog synthesizer, a smaller version of the Odyssey.', 'arp_axxe.jpg'),
    ('ARP', 'Quadra', 'Four-section analog synthesizer with string, lead, bass, and poly synth sections.', 'arp_quadra.jpg'),
    ('ARP', 'Solina String Ensemble', 'Famous string synthesizer known for its lush sound.', 'arp_solina_string_ensemble.jpg'),
    ('ARP', 'Pro Soloist', 'Monophonic preset synthesizer with expressive aftertouch and classic 70s sounds.', 'arp_prosoloist.jpg'),  
    ('ARP', 'Omni', 'Iconic string and polyphonic synthesizer, blending string ensemble with synth tones.', 'arp_omni.jpg'),  
    ('Boss', 'DR-55', 'Early analog drum machine with simple programming and punchy lo-fi sounds.', 'boss_dr55.jpg'),  
	('Boss', 'DR-660', 'Feature-packed digital drum machine with high-quality sounds and extensive editing options.', 'boss_dr660.jpg'),  
    ('Buchla', 'Music Easel', 'West Coast-style modular synth with a unique interface.', 'buchla_easel.jpg'),
    ('Casio', 'CZ-101', 'Compact digital synthesizer with phase distortion synthesis, known for its unique sound and affordability.', 'casio_cz101.jpg'),
	('Casio', 'MT-40', 'Portable keyboard with built-in rhythm section, ideal for home musicians and beginners.', 'casio_mt40.jpg'),
	('Casio', 'SK-1', 'Sampling keyboard with quirky lo-fi sound, one of the earliest affordable samplers.', 'casio_sk1.jpg'),
	('Casio', 'VL-Tone', 'Early digital synthesizer with a built-in calculator and basic synthesizing capabilities.', 'casio_vltone.jpg'),
    ('Crumar', 'DS-2', 'Hybrid synthesizer with both analog and digital oscillators.', 'crumar_ds2.jpg'),
    ('Crumar', 'Orchestrator', 'String and brass ensemble synthesizer.', 'crumar_orchestrator.jpg'),
    ('Crumar', 'Performer', 'String and brass synthesizer with a warm analog tone.', 'crumar_performer.jpg'),
    ('Crumar', 'Bit 99', 'Italian analog polysynth with MIDI and dual-layer architecture.', 'crumar_bit99.jpg'),  
	('Crumar', 'Stringman', 'Vintage string synthesizer known for its lush ensemble sound.', 'crumar_stringman.jpg'),  
    ('Elka', 'Synthex', 'Classic Italian analog polysynth known for its rich sound.', 'elka_synthex.jpg'),
    ('Elka', 'Rhapsody', 'Classic string machine famous for its rich orchestral tones.', 'elka_rhapsody.jpg'),  
    ('EMS', 'VCS3', 'Early modular synth known for its experimental sound design.', 'ems_vcs3.jpg'),
    ('E-mu', 'Drumulator', 'Drum machine that influenced early hip-hop and electronic music.', 'emu-drumulator.jpg'),
    ('E-mu', 'Emulator II', 'Improved version of the Emulator, with better sampling and sound quality.', 'emu_emulator2.jpg'),
    ('E-mu', 'SP-1200', 'Legendary sampler and drum machine famous for its gritty 12-bit sound.', 'emu_sp1200.jpg'),
    ('E-mu', 'Proteus', 'Legendary rackmount sound module with high-quality sampled instruments.', 'emu_proteus.jpg'),  
    ('Ensoniq', 'ASR-10', 'Advanced sampler and workstation with powerful effects.', 'ensoniq_asr10.jpg'),
    ('Ensoniq', 'ESQ-1', 'Hybrid digital-analog synthesizer with a powerful sequencer.', 'ensoniq_esq1.jpg'),
    ('Ensoniq', 'EPS', 'Early sampler workstation with real-time sequencing and expandable memory.', 'ensoniq_eps.jpg'),  
    ('Fairlight', 'CMI', 'Revolutionary digital sampling workstation from the 80s.', 'fairlight_cmi.jpg'),
    ('Korg', 'Mono/Poly', 'Four-voice analog synthesizer with unique modulation options.', 'korg-mono poly.jpg'),
    ('Korg', 'MS-20', 'Classic semi-modular monophonic synthesizer with an iconic filter.', 'korg-ms20.jpg'),
    ('Korg', 'M1', 'One of the best-selling digital workstations, famous for its piano sounds.', 'korg_m1.jpg'),
    ('Korg', 'MicroKorg', 'Compact virtual-analog synth with a built-in vocoder.', 'korg_microkorg.jpg'),
    ('Korg', 'MiniKorg 700S', 'Early monophonic synthesizer with a raw, distinctive sound.', 'korg_minikorg_700s.jpg'),
    ('Korg', 'Polysix', 'Analog polysynth with built-in chorus for lush, vintage tones.', 'korg_polysix.jpg'),
    ('Korg', 'Prophecy', 'Monophonic synthesizer with advanced digital modeling.', 'korg_prophecy.jpg'),
    ('Korg', 'Trident', 'Analog polysynth with dedicated brass, string, and synth sections.', 'korg_trident.jpg'),
    ('Korg', 'Triton', 'Flagship workstation synth used in countless productions.', 'korg_triton.jpg'),
    ('Korg', 'Wavestation', 'Vector synthesis synthesizer known for evolving textures.', 'korg_wavestation.jpg'),
    ('Korg', 'Poly-800', 'Affordable 8-voice polyphonic synthesizer with a distinctive "phaser" effect.', 'korg_poly800.jpg'),
    ('Linn', 'Linndrum', 'Legendary drum machine known for its punchy, drum machine-driven sounds of the 80s.', 'linn_linndrum.jpg'),  
	('Linn', 'LM-1', 'The first drum machine to use digital samples, famous for its distinctive sound in early 80s hits.', 'linn_lm1.jpg'),  
    ('Moog', 'Memorymoog', 'Analog polyphonic synthesizer with six voices and fat Moog sound.', 'moog_memorymoog.jpg'),
    ('Moog', 'Minimoog Model D', 'Legendary monophonic synthesizer, a staple in electronic music.', 'moog_minimoogd.jpg'),
    ('Moog', 'Multimoog', 'Duophonic analog synthesizer with aftertouch control.', 'moog_multimoog.jpg'),
    ('Moog', 'Prodigy', 'Compact monophonic synthesizer, great for bass and leads.', 'moog_prodigy.jpg'),
    ('Moog', 'Rogue', 'Small monophonic synth with a simple yet powerful sound.', 'moog_rogue.jpg'),
    ('Moog', 'Sonic Six', 'Portable analog synth with a unique sound and semi-modular design.', 'moog_sonic_six.jpg'),
    ('Moog', 'Source', 'Early programmable monophonic synthesizer with a distinctive sound.', 'moog_source.jpg'),
    ('Moog', 'Taurus', 'Bass synthesizer famous for its deep, earth-shaking sounds.', 'moog_taurus.jpg'),
    ('Moog', 'Polymoog', 'Iconic polyphonic synthesizer known for its lush pads and Vox Humana preset.', 'moog_polymoog.jpg'),  
    ('Novation', 'Bass Station', 'Monophonic analog synth designed for deep bass and acid-style leads.', 'novation_bassstation.jpg'),  
    ('Oberheim', 'SEM', 'Synthesizer Expander Module, a building block of classic Oberheim sounds.', 'ob_sem.jpg'),
    ('Oberheim', 'DMX', 'Classic drum machine used in early hip-hop and electro music.', 'ob_dmx.jpg'),
    ('Oberheim', 'Matrix-12', 'Advanced analog polysynth with extensive modulation options.', 'ob_matrix12.jpg'),
    ('Oberheim', 'OB-8', 'Powerful analog polysynth, used in many 80s hits.', 'ob_ob-8.jpg'),
    ('Oberheim', 'OB-1', 'Early monophonic synthesizer with programmable memory.', 'ob_ob1.jpg'),
    ('Oberheim', 'OB-X', 'Vintage analog polysynth known for its fat sound and classic brass tones.', 'ob_ob-x.jpg'),
    ('Oberheim', 'OB-Xa', 'Iconic analog polysynth with a fat Curtis filter sound and rich pads.', 'ob_ob-xa.jpg'),
    ('Oberheim', 'OB Two-Voice', 'Classic analog synthesizer known for its rich, warm sound and duophonic capabilities.', 'ob_two-voice.jpg'),  
    ('Octave', 'The Cat', 'Analog duophonic synthesizer, a competitor to the ARP Odyssey.', 'octave_thecat.jpg'),
    ('Octave', 'Voyetra 8', 'Powerful analog rackmount polysynth with deep modulation and a rich, complex sound.', 'octave_voyetra8.jpg'),  
    ('PPG', 'Wave 2', 'Digital wavetable synthesizer with analog filters.', 'ppg_wave_2.jpg'),
    ('Rhodes', 'Chroma', 'Polyphonic analog synthesizer with digital controls.', 'rhodes_chroma.jpg'),
    ('Roland', 'JX-3P', 'Analog polyphonic synthesizer with a simple interface and classic sound.', 'roland-jx3p.jpg'),
    ('Roland', 'D-50', 'Digital synthesizer known for its lush sounds and advanced modulation capabilities.', 'roland_d50.jpg'),
    ('Roland', 'JD-800', 'Digital synthesizer with a hands-on interface and powerful sound engine.', 'roland_jd800.jpg'),
    ('Roland', 'Juno-106', 'Legendary analog polysynth with full MIDI and iconic chorus effect.', 'roland_juno106.jpg'),
    ('Roland', 'Jupiter-8', 'Legendary polyphonic analog synthesizer, known for its rich sound and versatility.', 'roland_jupiter8.jpg'),
    ('Roland', 'SH-101', 'Monophonic analog synthesizer with a distinctive, punchy sound.', 'roland_sh101.jpg'),
    ('Roland', 'Strings 202', 'Polyphonic string synthesizer with lush, warm sounds.', 'roland_strings202.jpg'),
    ('Roland', 'TB-303', 'Famous bassline synthesizer, central to the acid house sound.', 'roland_tb303.jpg'),
    ('Roland', 'TR-808', 'Iconic drum machine with deep bass and sharp, punchy sounds.', 'roland_tr808.jpg'),
    ('Roland', 'TR-909', 'Legendary drum machine that shaped techno and house music.', 'roland_tr909.jpg'),
    ('Roland', 'JV-1080', 'Legendary rackmount synthesizer with rich PCM-based sounds, widely used in the 90s.', 'roland_jv1080.jpg'),  
	('Roland', 'VP-330', 'Classic vocoder and string ensemble synthesizer, famous for its lush choir sounds.', 'roland_vp330.jpg'),  
    ('Sequential', 'Pro-One', 'Monophonic analog synthesizer known for its fat bass and lead sounds.', 'sci_pro-one.jpg'),
    ('Sequential', 'Prophet-5', 'Legendary polyphonic analog synthesizer with a rich, evolving sound.', 'sci_prophet5.jpg'),
    ('Sequential', 'Prophet-600', 'Polyphonic analog synthesizer, the precursor to the Prophet-5 with more digital features.', 'sci_prophet_600.jpg'),
    ('Sequential', 'Six-Trak', 'Analog polyphonic synthesizer with six voices, great for sequencing.', 'sci_sixtrak.jpg'),
    ('Sequential', 'T8', 'Polyphonic digital synthesizer known for its unique interface and sounds.', 'sci_t8.jpg'),
    ('Sequential', 'Prophet VS', 'Hybrid digital/analog synthesizer known for its unique vector synthesis and complex sound design.', 'sci_prophetvs.jpg'),  
	('Sequential', 'Multitrack', 'Versatile multitrack recorder and sequencer designed for studio use, often paired with Prophet synthesizers.', 'sci_multitrack.jpg'),  
	('Sequential', 'Studio 44', 'Classic polyphonic synthesizer with a rich analog sound and flexible modulation capabilities.', 'sci_studio44.jpg'),  
    ('Synton', 'Syrinx', 'Analog synthesizer with a powerful sound and rare to find.', 'synton_syrinx.jpg'),
    ('Vermona', 'DRM', 'Analog drum machine with warm, punchy drum sounds and extensive modulation options.', 'vermona_drm.jpg'),  
    ('Waldorf', 'Wave', 'Advanced wavetable synthesizer with rich sound design possibilities.', 'waldorf_wave.jpg'),
    ('Waldorf', 'Microwave', 'Groundbreaking digital/analog hybrid synthesizer known for its rich, wavetable synthesis.', 'waldorf_microwave.jpg'),  
    ('Yamaha', 'CS-80', 'Famous analog polysynth with an expressive, lush sound.', 'yamaha_cs80.jpg'),
    ('Yamaha', 'DX7', 'Digital synthesizer known for its FM synthesis and iconic electric piano sounds.', 'yamaha_dx7.jpg'),
    ('Yamaha', 'SY77', 'Hybrid synthesizer combining FM synthesis with sample-based sound design.', 'yamaha_sy77.jpg'),
	('Yamaha', 'SK-30', 'Vintage combo keyboard featuring organ, string, and synthesizer layers.', 'yamaha_sk30.jpg');



