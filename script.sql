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
	player_name varchar(255) not null
);
CREATE TABLE attempts (
	id SERIAL PRIMARY KEY,
	player_id INT NOT NULL,
	time_started TIMESTAMP NOT NULL,
	score FLOAT DEFAULT 0,
	CONSTRAINT score_check CHECK (score BETWEEN 0 AND 100),
	CONSTRAINT fk_player FOREIGN KEY (player_id) REFERENCES players(id)
);

select * from synths

INSERT INTO synths (manufacturer, model, description, image_url)
VALUES
    ('Akai', 'MPC 3000', 'Classic drum machine and sampler from Akai.', 'akai_mpc3000.jpg'),
    ('Akai', 'S900', '12-bit sampler widely used in the late 80s.', 'akai_s900.jpg'),
    ('ARP', 'Odyssey', 'Iconic duophonic analog synthesizer.', 'arp-odyssey.jpg'),
    ('ARP', '2600', 'Semi-modular analog synthesizer, famous for its flexibility.', 'arp_2600.jpg'),
    ('ARP', 'Axxe', 'Monophonic analog synthesizer, a smaller version of the Odyssey.', 'arp_axxe.jpg'),
    ('ARP', 'Quadra', 'Four-section analog synthesizer with string, lead, bass, and poly synth sections.', 'arp_quadra.jpg'),
    ('ARP', 'Solina String Ensemble', 'Famous string synthesizer known for its lush sound.', 'arp_solina_string_ensemble.jpg'),
    ('Buchla', 'Easel', 'West Coast-style modular synth with a unique interface.', 'buchla_easel.jpg'),
    ('Crumar', 'DS-2', 'Hybrid synthesizer with both analog and digital oscillators.', 'crumar_ds2.jpg'),
    ('Crumar', 'Orchestrator', 'String and brass ensemble synthesizer.', 'crumar_orchestrator.jpg'),
    ('Crumar', 'Performer', 'String and brass synthesizer with a warm analog tone.', 'crumar_performer.jpg'),
    ('Elka', 'Synthex', 'Classic Italian analog polysynth known for its rich sound.', 'elka_synthex.jpg'),
    ('EMS', 'VCS 3', 'Early modular synth known for its experimental sound design.', 'ems_vcs3.jpg'),
    ('E-mu', 'Drumulator', 'Drum machine that influenced early hip-hop and electronic music.', 'emu-drumulator.jpg'),
    ('E-mu', 'Emulator', 'Early sampling keyboard, used in many 80s hits.', 'emu_emulator.jpg'),
    ('E-mu', 'Emulator II', 'Improved version of the Emulator, with better sampling and sound quality.', 'emu_emulator2.jpg'),
    ('E-mu', 'SP-1200', 'Legendary sampler and drum machine famous for its gritty 12-bit sound.', 'emu_sp1200.jpg'), ('Ensoniq', 'ASR-10', 'Advanced sampler and workstation with powerful effects.', 'ensoniq_asr10.jpg'),
    ('Ensoniq', 'ESQ-1', 'Hybrid digital-analog synthesizer with a powerful sequencer.', 'ensoniq_esq1.jpg'),
    ('Fairlight', 'CMI', 'Revolutionary digital sampling workstation from the 80s.', 'fairlight_cmi.jpg'),
    ('Korg', 'Mono/Poly', 'Four-voice analog synthesizer with unique modulation options.', 'korg-mono poly.jpg'),
    ('Korg', 'MS-20', 'Classic semi-modular monophonic synthesizer with an iconic filter.', 'korg-ms20.jpg'),
    ('Korg', 'M1', 'One of the best-selling digital workstations, famous for its piano sounds.', 'korg_m1.jpg'),
    ('Korg', 'MicroKorg', 'Compact virtual-analog synth with a built-in vocoder.', 'korg_microkorg.jpg'),
    ('Korg', 'MiniKorg 700S', 'Early monophonic synthesizer with a raw, distinctive sound.', 'korg_minikorg_700s.jpg'),
    ('Korg', 'Polysix', 'Analog polysynth with built-in chorus for lush, vintage tones.', 'korg_polysix.jpg'),
    ('Korg', 'Prophecy', 'Monophonic synthesizer with advanced digital modeling.', 'korg_prophecy.jpg'),
    ('Korg', 'PS-3100', 'Rare polyphonic modular synthesizer with a unique sound.', 'korg_ps3100.jpg'),
    ('Korg', 'Trident', 'Analog polysynth with dedicated brass, string, and synth sections.', 'korg_trident.jpg'),
    ('Korg', 'Triton', 'Flagship workstation synth used in countless productions.', 'korg_triton.jpg'),
    ('Korg', 'Wavestation', 'Vector synthesis synthesizer known for evolving textures.', 'korg_wavestation.jpg'),
     ('Moog', 'Memorymoog', 'Analog polyphonic synthesizer with six voices and fat Moog sound.', 'moog_memorymoog.jpg'),
    ('Moog', 'Minimoog Model D', 'Legendary monophonic synthesizer, a staple in electronic music.', 'moog_minimoogd.jpg'),
    ('Moog', 'Multimoog', 'Duophonic analog synthesizer with aftertouch control.', 'moog_multimoog.jpg'),
    ('Moog', 'Prodigy', 'Compact monophonic synthesizer, great for bass and leads.', 'moog_prodigy.jpg'),
    ('Moog', 'Rogue', 'Small monophonic synth with a simple yet powerful sound.', 'moog_rogue.jpg'),
    ('Moog', 'Sonic Six', 'Portable analog synth with a unique sound and semi-modular design.', 'moog_sonic_six.jpg'),
    ('Moog', 'Source', 'Early programmable monophonic synthesizer with a distinctive sound.', 'moog_source.jpg'),
    ('Moog', 'Taurus', 'Bass synthesizer famous for its deep, earth-shaking sounds.', 'moog_taurus.jpg'),
    ('Oberheim', 'SEM', 'Synthesizer Expander Module, a building block of classic Oberheim sounds.', 'ob-sem.jpg'),
    ('Oberheim', 'DMX', 'Classic drum machine used in early hip-hop and electro music.', 'ob_dmx.jpg'),
    ('Oberheim', 'Matrix-12', 'Advanced analog polysynth with extensive modulation options.', 'ob_matrix12.jpg'),
    ('Oberheim', 'OB-8', 'Powerful analog polysynth, used in many 80s hits.', 'ob_ob-8.jpg'),
    ('Oberheim', 'OB-1', 'Early monophonic synthesizer with programmable memory.', 'ob_ob1.jpg'),
    ('Octave', 'The Cat', 'Analog duophonic synthesizer, a competitor to the ARP Odyssey.', 'octave_thecat.jpg'),
    ('PPG', 'Wave 2', 'Digital wavetable synthesizer with analog filters.', 'ppg_wave_2.jpg'),
    ('Rhodes', 'Chroma', 'Polyphonic analog synthesizer with digital controls.', 'rhodes_chroma.jpg'),
    ('Roland', 'JX-3P', 'Analog polyphonic synthesizer with a simple interface and classic sound.', 'roland-jx3p.jpg'),
    ('Roland', 'D-50', 'Digital synthesizer known for its lush sounds and advanced modulation capabilities.', 'roland_d50.jpg'),
    ('Roland', 'JD-800', 'Digital synthesizer with a hands-on interface and powerful sound engine.', 'roland_jd800.jpg'),
    ('Roland', 'JP-8000', 'Virtual analog synthesizer known for its supersaw waves and iconic sounds.', 'roland_jp8000.jpg'),
    ('Roland', 'Juno-60', 'Classic analog polysynth with a warm sound and famous chorus effect.', 'roland_juno60.jpg'),
    ('Roland', 'Jupiter-8', 'Legendary polyphonic analog synthesizer, known for its rich sound and versatility.', 'roland_jupiter8.jpg'),
    ('Roland', 'MC-202', 'Monophonic sequencer and synthesizer, great for acid and electro sounds.', 'roland_mc202.jpg'),
    ('Roland', 'MKS-80', 'Rackmount version of the Jupiter-8, offering the same rich analog tones.', 'roland_mks-80.jpg'),
    ('Roland', 'SH-09', 'Monophonic analog synth with a thick, punchy sound.', 'roland_sh09.jpg'),
    ('Roland', 'SH-101', 'Monophonic analog synthesizer with a distinctive, punchy sound.', 'roland_sh101.jpg'),
    ('Roland', 'SH-2', 'Monophonic analog synthesizer known for its fat bass sounds.', 'roland_sh2.jpg'),
    ('Roland', 'Strings 202', 'Polyphonic string synthesizer with lush, warm sounds.', 'roland_strings202.jpg'),
    ('Roland', 'System 100', 'Modular analog synthesizer system, known for its flexibility and versatility.', 'roland_system100.jpg'),
    ('Roland', 'TB-303', 'Famous bassline synthesizer, central to the acid house sound.', 'roland_tb303.jpg'),
    ('Roland', 'TR-707', 'Digital drum machine, used in early house and electronic music.', 'roland_tr707.jpg'),
    ('Roland', 'TR-808', 'Iconic drum machine with deep bass and sharp, punchy sounds.', 'roland_tr808.jpg'),
    ('Roland', 'TR-909', 'Legendary drum machine that shaped techno and house music.', 'roland_tr909.jpg'),
     ('SCI', 'Pro-One', 'Monophonic analog synthesizer known for its fat bass and lead sounds.', 'sci_pro-one.jpg'),
    ('SCI', 'Prophet-5', 'Legendary polyphonic analog synthesizer with a rich, evolving sound.', 'sci_prophet5.jpg'),
    ('SCI', 'Prophet-600', 'Polyphonic analog synthesizer, the precursor to the Prophet-5 with more digital features.', 'sci_prophet_600.jpg'),
    ('SCI', 'Six-Trak', 'Analog polyphonic synthesizer with six voices, great for sequencing.', 'sci_sixtrak.jpg'),
    ('SCI', 'T8', 'Polyphonic digital synthesizer known for its unique interface and sounds.', 'sci_t8.jpg'),
    ('Synton', 'Syrinx', 'Analog synthesizer with a powerful sound and rare to find.', 'synton_syrinx.jpg'),
    ('Waldorf', 'Wave', 'Advanced wavetable synthesizer with rich sound design possibilities.', 'waldorf_wave.jpg'),
    ('Yamaha', 'CS-60', 'Analog polyphonic synthesizer known for its complex sound and unique features.', 'yamaha-cs60.jpg'),
    ('Yamaha', 'CS-15', 'Analog monophonic synthesizer with a deep, raw sound.', 'yamaha_cs15.jpg'),
    ('Yamaha', 'CS-80', 'Famous analog polysynth with an expressive, lush sound.', 'yamaha_cs80.jpg'),
    ('Yamaha', 'DX7', 'Digital synthesizer known for its FM synthesis and iconic electric piano sounds.', 'yamaha_dx7.jpg'),
    ('Yamaha', 'TX81Z', 'FM sound module with deep, experimental sounds, great for electronic music.', 'yamaha_tx81z.jpg');
    
