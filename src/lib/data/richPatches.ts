export const richPatches: Record<string, any> = {
  'holy-basil-tulsi': {
    medicinal_uses: [{ ailment_name: 'Stress & Anxiety', effectiveness: 'High', description: 'Adaptogenic action lowers cortisol and enhances resilience.', scientifically_proven: true }, { ailment_name: 'Metabolic Health', effectiveness: 'High', description: 'Regulates blood glucose and lipid profiles.', scientifically_proven: true }],
    drug_interactions: ['Blood thinners: may increase clotting time', 'Diabetes meds: risk of hypoglycemia'], toxicity: { level: 'low', details: 'Extremely high doses of eugenol can cause liver strain.' },
    preparations: [{ name: 'Tulsi Tea', type: 'infusion', difficulty: 'easy', ingredients: [{item:'Fresh Leaves', quantity:10, unit:'leaves'}], steps: ['Steep in boiling water'], dosage: '1 cup', duration: 'Daily' }],
    active_compounds: ['Eugenol', 'Ursolic Acid', 'Rosmarinic Acid'], regions_in_india: ['Uttar Pradesh', 'Maharashtra', 'Karnataka']
  },
  'neem-azadirachta-indica': {
    medicinal_uses: [{ ailment_name: 'Skin Infections & Acne', effectiveness: 'High', description: 'Potent antimicrobial and anti-inflammatory action.', scientifically_proven: true }, { ailment_name: 'Oral Health', effectiveness: 'High', description: 'Reduces plaque and gingivitis via antibacterial agents.', scientifically_proven: true }],
    drug_interactions: ['Immunosuppressants: may decrease efficacy', 'Diabetes meds: additive hypoglycemia'], toxicity: { level: 'moderate', details: 'Neem oil ingestion extremely unsafe for children; safe for adults topically.' },
    preparations: [{ name: 'Neem Paste', type: 'paste', difficulty: 'easy', ingredients: [{item:'Fresh leaves', quantity:1, unit:'handful'}], steps: ['Grind with water'], dosage: 'Topical', duration: 'As needed' }],
    active_compounds: ['Azadirachtin', 'Nimbin', 'Nimbidin'], regions_in_india: ['Rajasthan', 'Gujarat', 'Tamil Nadu']
  },
  'ashwagandha-withania-somnifera': {
    medicinal_uses: [{ ailment_name: 'Stress & Sleep Quality', effectiveness: 'High', description: 'Reduces cortisol levels and improves overall sleep architecture.', scientifically_proven: true }, { ailment_name: 'Cognitive Function', effectiveness: 'High', description: 'Neuroprotective properties enhance memory and attention.', scientifically_proven: true }],
    drug_interactions: ['Sedatives: additive drowsiness', 'Thyroid meds: may increase hormone levels'], toxicity: { level: 'low', details: 'High doses may cause gastric upset; avoid in pregnancy.' },
    preparations: [{ name: 'Ashwagandha Milk', type: 'decoction', difficulty: 'easy', ingredients: [{item:'Root powder', quantity:0.5, unit:'tsp'}, {item:'Milk', quantity:1, unit:'cup'}], steps: ['Boil together'], dosage: '1 cup', duration: 'Nightly' }],
    active_compounds: ['Withanolides (Withaferin A)', 'Alkaloids'], regions_in_india: ['Madhya Pradesh', 'Rajasthan', 'Punjab']
  },
  'aloe-vera-ghritkumari': {
    medicinal_uses: [{ ailment_name: 'Burns & Wounds', effectiveness: 'High', description: 'Accelerates healing of first-to-second degree burns.', scientifically_proven: true }],
    drug_interactions: ['Oral medications: laxative effect decreases absorption', 'Diuretics: risk of hypokalemia'], toxicity: { level: 'low', details: 'Aloe latex can cause cramps and diarrhea.' },
    preparations: [{ name: 'Fresh Aloe Gel', type: 'gel', difficulty: 'easy', ingredients: [{item:'Aloe leaf', quantity:1, unit:'leaf'}], steps: ['Extract clear inner gel', 'Apply topically'], dosage: 'Apply freely', duration: 'As needed' }],
    active_compounds: ['Acemannan', 'Aloin', 'Anthraquinones'], regions_in_india: ['Rajasthan', 'Gujarat', 'Maharashtra']
  },
  'turmeric-haldi': {
    medicinal_uses: [{ ailment_name: 'Joint Pain & Osteoarthritis', effectiveness: 'High', description: 'Potent COX-2 inhibitor reducing inflammation significantly.', scientifically_proven: true }],
    drug_interactions: ['Blood thinners (Warfarin): increased bleeding risk', 'Diabetes meds: additive hypoglycemia'], toxicity: { level: 'none', details: 'Culinary doses extremely safe.' },
    preparations: [{ name: 'Golden Milk', type: 'decoction', difficulty: 'easy', ingredients: [{item:'Turmeric', quantity:1, unit:'tsp'}, {item:'Black Pepper', quantity:1, unit:'pinch'}, {item:'Milk', quantity:1, unit:'cup'}], steps: ['Simmer turmeric and pepper in milk'], dosage: '1 cup', duration: 'Nightly' }],
    active_compounds: ['Curcumin', 'Demethoxycurcumin', 'Turmerone'], regions_in_india: ['Andhra Pradesh', 'Tamil Nadu', 'Odisha']
  },
  'ginger-adrak': {
    medicinal_uses: [{ ailment_name: 'Nausea & Morning Sickness', effectiveness: 'High', description: 'Blocks serotonin receptors in the gut causing nausea.', scientifically_proven: true }],
    drug_interactions: ['Anticoagulants: may increase bleeding time', 'Antacids: high doses may worsen acid reflux'], toxicity: { level: 'none', details: 'Safe in standard dietary amounts.' },
    preparations: [{ name: 'Ginger Tea', type: 'infusion', difficulty: 'easy', ingredients: [{item:'Grated Ginger', quantity:1, unit:'tsp'}], steps: ['Steep in hot water for 10 minutes'], dosage: '1-2 cups heavily', duration: 'During nausea' }],
    active_compounds: ['Gingerol', 'Shogaol', 'Zingerone'], regions_in_india: ['Kerala', 'Meghalaya', 'Arunachal Pradesh']
  },
  'amla-indian-gooseberry': {
    medicinal_uses: [{ ailment_name: 'Hyperlipidemia', effectiveness: 'Moderate', description: 'Lowers LDL cholesterol and triglycerides.', scientifically_proven: true }],
    drug_interactions: ['Antidiabetics: synergistic blood sugar lowering'], toxicity: { level: 'none', details: 'Safe superfood.' },
    preparations: [{ name: 'Amla Juice', type: 'juice', difficulty: 'easy', ingredients: [{item:'Fresh Amla', quantity:2, unit:'pieces'}], steps: ['Deseed, blend with water and strain'], dosage: '20 ml', duration: 'Daily' }],
    active_compounds: ['Vitamin C (Ascorbic Acid)', 'Ellagic Acid', 'Gallic Acid'], regions_in_india: ['Uttar Pradesh', 'Maharashtra', 'Gujarat']
  },
  'giloy-guduchi': {
    medicinal_uses: [{ ailment_name: 'Immune Deficiency & Fever', effectiveness: 'High', description: 'Increases phagocytic activity of macrophages.', scientifically_proven: true }],
    drug_interactions: ['Immunosuppressants: immunostimulatory action may counteract'], toxicity: { level: 'none', details: 'Well tolerated.' },
    preparations: [{ name: 'Giloy Kadha', type: 'decoction', difficulty: 'easy', ingredients: [{item:'Giloy Stem', quantity:2, unit:'inches'}], steps: ['Crush and boil until halved'], dosage: '30 ml', duration: 'During fever' }],
    active_compounds: ['Tinosporine', 'Giloin', 'Berberine'], regions_in_india: ['West Bengal', 'Bihar', 'Assam']
  },
  'brahmi-bacopa-monnieri': {
    medicinal_uses: [{ ailment_name: 'Cognitive Decline & Memory', effectiveness: 'High', description: 'Promotes dendritic branching and nerve growth.', scientifically_proven: true }],
    drug_interactions: ['Anticholinergics: may block effects', 'Thyroid meds: might alter levels'], toxicity: { level: 'none', details: 'May cause mild stomach upset.' },
    preparations: [{ name: 'Brahmi Ghrita', type: 'paste', difficulty: 'expert', ingredients: [{item:'Brahmi Paste', quantity:1, unit:'part'}], steps: ['Process with medicated ghee'], dosage: '1 tsp', duration: 'Daily' }],
    active_compounds: ['Bacoside A', 'Bacoside B', 'Brahmin'], regions_in_india: ['Kerala', 'Karnataka', 'Tamil Nadu']
  },
  'mint-pudina': {
    medicinal_uses: [{ ailment_name: 'IBS & Indigestion', effectiveness: 'High', description: 'Relaxes gastrointestinal smooth muscle.', scientifically_proven: true }],
    drug_interactions: ['Cyclosporine: increases blood levels of the drug'], toxicity: { level: 'none', details: 'Avoid in severe GERD.' },
    preparations: [{ name: 'Mint Infusion', type: 'infusion', difficulty: 'easy', ingredients: [{item:'Mint Leaves', quantity:1, unit:'handful'}], steps: ['Steep in boiling water'], dosage: '1 cup', duration: 'Post-meals' }],
    active_compounds: ['Menthol', 'Menthone', 'Cineol'], regions_in_india: ['Punjab', 'Haryana', 'Uttar Pradesh']
  },
  'curry-leaves-kadi-patta': {
    medicinal_uses: [{ ailment_name: 'Diabetes Management', effectiveness: 'Moderate', description: 'Protects pancreatic beta-cells from oxidative stress.', scientifically_proven: true }],
    drug_interactions: ['Anti-diabetic drugs: careful monitoring needed'], toxicity: { level: 'none', details: 'Very safe as spice.' },
    preparations: [{ name: 'Curry Leaf Oil', type: 'oil', difficulty: 'medium', ingredients: [{item:'Curry Leaves', quantity:1, unit:'cup'}], steps: ['Heat with coconut oil until black'], dosage: 'Topical', duration: 'Weekly for hair' }],
    active_compounds: ['Mahanimbine', 'Koenimbine', 'Murrayanine'], regions_in_india: ['Andhra Pradesh', 'Tamil Nadu', 'Karnataka']
  },
  'lemongrass': {
    medicinal_uses: [{ ailment_name: 'Anxiety & Insomnia', effectiveness: 'Moderate', description: 'Mild sedative and anxiolytic properties.', scientifically_proven: true }],
    drug_interactions: ['Sedatives: additive effects'], toxicity: { level: 'none', details: 'Essential oil toxic if ingested raw.' },
    preparations: [{ name: 'Lemongrass Tea', type: 'decoction', difficulty: 'easy', ingredients: [{item:'Stalks', quantity:2, unit:'pieces'}], steps: ['Boil chopped stalks'], dosage: '1 cup', duration: 'Before bed' }],
    active_compounds: ['Citral', 'Geraniol', 'Myrcene'], regions_in_india: ['Kerala', 'Karnataka', 'Assam']
  },
  'fenugreek-methi': {
    medicinal_uses: [{ ailment_name: 'Lactation & Diabetes', effectiveness: 'High', description: 'Stimulates sweat glands (breasts internally) to upregulate milk, blunts sugar spikes.', scientifically_proven: true }],
    drug_interactions: ['Insulin & Glimepiride: high risk of hypoglycemia'], toxicity: { level: 'low', details: 'Avoid massive medicinal doses during pregnancy.' },
    preparations: [{ name: 'Soaked Seeds', type: 'raw', difficulty: 'easy', ingredients: [{item:'Seeds', quantity:1, unit:'tsp'}], steps: ['Soak overnight, drink water and chew'], dosage: '1 tsp', duration: 'Daily' }],
    active_compounds: ['Diosgenin', 'Trigonelline', '4-Hydroxyisoleucine'], regions_in_india: ['Rajasthan', 'Gujarat', 'Madhya Pradesh']
  },
  'bael-bilva': {
    medicinal_uses: [{ ailment_name: 'Chronic Diarrhea & IBS', effectiveness: 'High', description: 'Tannins bind to inflamed bowel mucosa acting as astringent.', scientifically_proven: true }],
    drug_interactions: ['Thyroid hormone: may decrease absorption if taken together'], toxicity: { level: 'none', details: 'Constipative in excess.' },
    preparations: [{ name: 'Bael Sharbat', type: 'juice', difficulty: 'easy', ingredients: [{item:'Fruit Pulp', quantity:1, unit:'cup'}], steps: ['Mash pulp in water and strain'], dosage: '1 glass', duration: 'As needed' }],
    active_compounds: ['Marmelosin', 'Tannins', 'Psoralen'], regions_in_india: ['Uttar Pradesh', 'Bihar', 'West Bengal']
  },
  'shatavari': {
    medicinal_uses: [{ ailment_name: 'Menopause & PMS', effectiveness: 'High', description: 'Phytoestrogenic effect balancing hormonal shifts.', scientifically_proven: true }],
    drug_interactions: ['Diuretics: may have additive water-losing effects'], toxicity: { level: 'none', details: 'Avoid if estrogen-sensitive cancer is present.' },
    preparations: [{ name: 'Shatavari Milk', type: 'decoction', difficulty: 'easy', ingredients: [{item:'Powder', quantity:1, unit:'tsp'}, {item:'Milk', quantity:1, unit:'cup'}], steps: ['Boil together'], dosage: '1 cup', duration: 'Daily' }],
    active_compounds: ['Shatavarin I-IV', 'Asparagamine A'], regions_in_india: ['Himalayas', 'Sri Lanka border', 'Kerala']
  },
  'arjuna': {
    medicinal_uses: [{ ailment_name: 'Heart Failure & Angina', effectiveness: 'High', description: 'Increases left ventricular ejection fraction and coronary flow.', scientifically_proven: true }],
    drug_interactions: ['Beta-blockers: potentiates hypotensive effects', 'Blood thinners: enhances antiplatelet activity'], toxicity: { level: 'none', details: 'Very safe.' },
    preparations: [{ name: 'Arjuna Kshirpak', type: 'decoction', difficulty: 'medium', ingredients: [{item:'Bark powder', quantity:1, unit:'tsp'}], steps: ['Boil in milk and water until water evaporates'], dosage: '1 cup', duration: 'Morning' }],
    active_compounds: ['Arjunolic Acid', 'Terminalic Acid', 'Arjunin'], regions_in_india: ['Madhya Pradesh', 'Maharashtra', 'Odisha']
  },
  'haritaki': {
    medicinal_uses: [{ ailment_name: 'Constipation & Detox', effectiveness: 'High', description: 'Stimulates intestinal motility and sweeps colon.', scientifically_proven: true }],
    drug_interactions: ['Blood sugar meds: lowers blood sugar'], toxicity: { level: 'none', details: 'Avoid during severe dehydration.' },
    preparations: [{ name: 'Triphala Component', type: 'powder', difficulty: 'easy', ingredients: [{item:'Haritaki Powder', quantity:0.5, unit:'tsp'}], steps: ['Mix with warm water'], dosage: '0.5 tsp', duration: 'Bedtime' }],
    active_compounds: ['Chebulinic Acid', 'Gallic Acid', 'Corilagin'], regions_in_india: ['Himachal Pradesh', 'Madhya Pradesh', 'Kerala']
  },
  'kalmegh-nilavembu': {
    medicinal_uses: [{ ailment_name: 'Liver Toxicity & Fevers', effectiveness: 'High', description: 'Hepatoprotective via antioxidant enzymes upregulation.', scientifically_proven: true }],
    drug_interactions: ['Immunosuppressants: immunostimulatory', 'Blood pressure drugs: additive hypotension'], toxicity: { level: 'moderate', details: 'Extremely bitter, can cause gastric upset.' },
    preparations: [{ name: 'Kalmegh Decoction', type: 'decoction', difficulty: 'easy', ingredients: [{item:'Leaves', quantity:1, unit:'tsp'}], steps: ['Boil until reduced'], dosage: '20 ml', duration: 'During infection' }],
    active_compounds: ['Andrographolide', 'Neoandrographolide'], regions_in_india: ['West Bengal', 'Assam', 'Odisha']
  },
  'mulethi-licorice': {
    medicinal_uses: [{ ailment_name: 'Peptic Ulcers & Cough', effectiveness: 'High', description: 'Mucilage coats throat/stomach; glycyrrhizin inhibits ulcer-causing bacteria.', scientifically_proven: true }],
    drug_interactions: ['Corticosteroids: prolongs cortisol half-life', 'Diuretics: risk of severe hypokalemia'], toxicity: { level: 'moderate', details: 'Chronic use causes high blood pressure and low potassium.' },
    preparations: [{ name: 'Mulethi Stick Chew', type: 'raw', difficulty: 'easy', ingredients: [{item:'Root stick', quantity:1, unit:'piece'}], steps: ['Chew slowly for throat coat'], dosage: '1 stick', duration: 'As needed' }],
    active_compounds: ['Glycyrrhizin', 'Glabridin', 'Liquiritin'], regions_in_india: ['Punjab', 'Jammu & Kashmir']
  },
  'clove-laung': {
    medicinal_uses: [{ ailment_name: 'Toothache & Plaque', effectiveness: 'High', description: 'Eugenol acts as a powerful topical anesthetic and germicide.', scientifically_proven: true }],
    drug_interactions: ['Anticoagulants: eugenol slows blood clotting'], toxicity: { level: 'low', details: 'Essential oil ingestion can cause hepatotoxicity.' },
    preparations: [{ name: 'Clove Oil Application', type: 'oil', difficulty: 'easy', ingredients: [{item:'Clove oil', quantity:1, unit:'drop'}], steps: ['Dab on cotton and apply to tooth'], dosage: 'Drop', duration: 'Pain instances' }],
    active_compounds: ['Eugenol', 'Beta-caryophyllene', 'Eugenyl acetate'], regions_in_india: ['Kerala', 'Tamil Nadu', 'Karnataka']
  },
  'cinnamon-dalchini': {
    medicinal_uses: [{ ailment_name: 'Insulin Resistance', effectiveness: 'Moderate', description: 'Mimics insulin and increases glucose uptake by cells.', scientifically_proven: true }],
    drug_interactions: ['Diabetes meds: enhances lowering effect', 'Hepatotoxic drugs: cassia variety adds strain'], toxicity: { level: 'low', details: 'Cassia has coumarin causing liver damage; Ceylon variant is safe.' },
    preparations: [{ name: 'Cinnamon Water', type: 'infusion', difficulty: 'easy', ingredients: [{item:'Powder', quantity:0.5, unit:'tsp'}], steps: ['Steep in hot water'], dosage: '1 cup', duration: 'Daily' }],
    active_compounds: ['Cinnamaldehyde', 'Cinnamic Acid', 'Coumarin (in Cassia)'], regions_in_india: ['Kerala', 'Karnataka (Western Ghats)']
  },
  'cardamom-elaichi': {
    medicinal_uses: [{ ailment_name: 'Halitosis & Indigestion', effectiveness: 'High', description: 'Volatile oils stimulate stomach acids and kill oral bacteria.', scientifically_proven: true }],
    drug_interactions: ['None widely documented'], toxicity: { level: 'none', details: 'Culinary safe. May trigger gallstone colic in chunks.' },
    preparations: [{ name: 'Post-Meal Chew', type: 'raw', difficulty: 'easy', ingredients: [{item:'Pod', quantity:1, unit:'piece'}], steps: ['Chew inner seeds'], dosage: '1 pod', duration: 'After meals' }],
    active_compounds: ['Terpinyl Acetate', 'Cineol', 'Limonene'], regions_in_india: ['Kerala (Cardamom Hills)', 'Sikkim']
  },
  'black-pepper-kali-mirch': {
    medicinal_uses: [{ ailment_name: 'Bioavailability Enhancer', effectiveness: 'High', description: 'Inhibits hepatic P450 enzymes and intestinal p-glycoprotein, boosting absorption of other drugs.', scientifically_proven: true }],
    drug_interactions: ['Phenytoin, Propranolol, Theophylline: piperine powerfully increases their serum levels by slowing excretion.'], toxicity: { level: 'low', details: 'Gastric irritation in excess.' },
    preparations: [{ name: 'Trikatu', type: 'powder', difficulty: 'easy', ingredients: [{item:'Pepper', quantity:1, unit:'pinch'}], steps: ['Combine with ginger and long pepper'], dosage: 'Pinch', duration: 'Before meals' }],
    active_compounds: ['Piperine', 'Chavicine', 'Piperidine'], regions_in_india: ['Kerala', 'Karnataka', 'Tamil Nadu']
  },
  'saffron-kesar': {
    medicinal_uses: [{ ailment_name: 'Depression & PMS', effectiveness: 'Moderate', description: 'Serotonergic mechanism similar to SSRI fluoxetine.', scientifically_proven: true }],
    drug_interactions: ['Blood pressure meds: decreases BP', 'Sedatives: increases drowsiness'], toxicity: { level: 'moderate', details: 'Doses >5g can be toxic/abortifacient.' },
    preparations: [{ name: 'Saffron Milk', type: 'infusion', difficulty: 'easy', ingredients: [{item:'Strands', quantity:3, unit:'strands'}, {item:'Milk', quantity:1, unit:'cup'}], steps: ['Steep in warm milk'], dosage: '1 cup', duration: 'Nightly' }],
    active_compounds: ['Crocin', 'Safranal', 'Picrocrocin'], regions_in_india: ['Jammu & Kashmir', 'Himachal Pradesh']
  },
  'chamomile-babuna': {
    medicinal_uses: [{ ailment_name: 'Insomnia & Anxiety', effectiveness: 'Moderate', description: 'Apigenin binds to GABA receptors in the brain.', scientifically_proven: true }],
    drug_interactions: ['Warfarin: coumarin compounds may increase bleeding', 'Sedatives: additive'], toxicity: { level: 'none', details: 'Ragweed allergy cross-reactivity.' },
    preparations: [{ name: 'Chamomile Tea', type: 'infusion', difficulty: 'easy', ingredients: [{item:'Flowers', quantity:1, unit:'tbsp'}], steps: ['Steep in hot water for 5 mins'], dosage: '1 cup', duration: 'Before bed' }],
    active_compounds: ['Apigenin', 'Bisabolol', 'Chamazulene'], regions_in_india: ['Uttarakhand', 'Himachal Pradesh', 'Uttar Pradesh']
  },
  // BATCH 2
  'shankhpushpi': {
    medicinal_uses: [{ ailment_name: 'Memory Loss & ADHD', effectiveness: 'High', description: 'Nootropic (medhya) that calms central nervous system and boosts memory.', scientifically_proven: true }],
    drug_interactions: ['Phenytoin: may reduce antiepileptic drug efficacy if not monitored.'], toxicity: { level: 'none', details: 'Extremely safe.' },
    preparations: [{ name: 'Shankhpushpi Syrup', type: 'decoction', difficulty: 'easy', ingredients: [{item:'Powder', quantity:1, unit:'tsp'}], steps: ['Boil with water/milk'], dosage: '1 tsp', duration: 'Morning' }],
    active_compounds: ['Convolvine', 'Scopoline', 'Phyllabine'], regions_in_india: ['Rajasthan', 'Gujarat', 'Bihar']
  },
  'bhringraj': {
    medicinal_uses: [{ ailment_name: 'Alopecia & Liver Cirrhosis', effectiveness: 'High', description: 'Promotes hair follicle transition to anagen phase; hepatoprotective.', scientifically_proven: true }],
    drug_interactions: ['Diuretics: additive effect', 'Antidiabetics: monitor blood sugar'], toxicity: { level: 'none', details: 'Generally safe.' },
    preparations: [{ name: 'Bhringraj Oil', type: 'oil', difficulty: 'medium', ingredients: [{item:'Juice', quantity:1, unit:'cup'}, {item:'Sesame Oil', quantity:1, unit:'cup'}], steps: ['Boil together until water evaporates'], dosage: 'Topical', duration: 'Weekly' }],
    active_compounds: ['Wedelolactone', 'Ecliptine', 'Demethylwedelolactone'], regions_in_india: ['Andhra Pradesh', 'Tamil Nadu', 'Maharashtra']
  },
  'gudmar-gymnema': {
    medicinal_uses: [{ ailment_name: 'Diabetes Type 1 & 2', effectiveness: 'High', description: 'Regenerates pancreatic islet cells and delays glucose absorption in intestines.', scientifically_proven: true }],
    drug_interactions: ['Insulin & Glyburide: serious risk of hypoglycemia'], toxicity: { level: 'low', details: 'May cause liver toxicity in extreme doses.' },
    preparations: [{ name: 'Gudmar Tea', type: 'decoction', difficulty: 'easy', ingredients: [{item:'Powder', quantity:0.5, unit:'tsp'}], steps: ['Drink before meals'], dosage: '0.5 tsp', duration: 'Before meals' }],
    active_compounds: ['Gymnemic Acid', 'Gurmarin', 'Gymnemagenin'], regions_in_india: ['Madhya Pradesh', 'Chhattisgarh', 'Andhra Pradesh']
  },
  'kutki': {
    medicinal_uses: [{ ailment_name: 'Jaundice & Hepatitis', effectiveness: 'High', description: 'Stimulates liver regeneration and choleretic (bile promoting) activity.', scientifically_proven: true }],
    drug_interactions: ['Immunosuppressants: immunostimulant activity opposes them'], toxicity: { level: 'low', details: 'Laxative diarrhea at high doses.' },
    preparations: [{ name: 'Kutki Churna', type: 'powder', difficulty: 'easy', ingredients: [{item:'Powder', quantity:0.25, unit:'tsp'}], steps: ['Mix with honey (very bitter)'], dosage: '0.25 tsp', duration: 'Empty stomach' }],
    active_compounds: ['Picroside I & II', 'Kutkoside', 'Apocynin'], regions_in_india: ['Himachal Pradesh', 'Uttarakhand (High Altitudes)']
  },
  'vidanga': {
    medicinal_uses: [{ ailment_name: 'Intestinal Worms', effectiveness: 'High', description: 'Potent anthelmintic paralyzing tapeworms and roundworms.', scientifically_proven: true }],
    drug_interactions: ['None widely documented'], toxicity: { level: 'none', details: 'Safe in traditional doses.' },
    preparations: [{ name: 'Vidanga Honey Paste', type: 'paste', difficulty: 'easy', ingredients: [{item:'Powder', quantity:1, unit:'tsp'}, {item:'Honey', quantity:1, unit:'tsp'}], steps: ['Mix and consume'], dosage: '1 tsp', duration: 'Fasting 3-5 days' }],
    active_compounds: ['Embelin', 'Quercitol', 'Tannins'], regions_in_india: ['Western Ghats', 'Assam', 'Maharashtra']
  },
  'pippali-long-pepper': {
    medicinal_uses: [{ ailment_name: 'Asthma & Bioavailability', effectiveness: 'High', description: 'Bronchodilator that also inhibits liver clearance of other drugs.', scientifically_proven: true }],
    drug_interactions: ['All P450 metabolized drugs: heavily increases their blood concentrations.'], toxicity: { level: 'low', details: 'Excess heat causes gastric distress.' },
    preparations: [{ name: 'Pippali Milk', type: 'decoction', difficulty: 'medium', ingredients: [{item:'Pippali', quantity:2, unit:'pieces'}], steps: ['Boil in milk'], dosage: '1 cup', duration: 'Nightly during asthma' }],
    active_compounds: ['Piperine', 'Piplartine', 'Piperlonguminine'], regions_in_india: ['Assam', 'Kerala', 'Tamil Nadu (Hills)']
  },
  'nagarmotha': {
    medicinal_uses: [{ ailment_name: 'Diarrhea & Obesity', effectiveness: 'Moderate', description: 'Astringent and lipolytic (fat breaking down) properties in Ayurveda.', scientifically_proven: false }],
    drug_interactions: ['Bleeding disorder medications: may slow clotting'], toxicity: { level: 'none', details: 'Safe.' },
    preparations: [{ name: 'Motha Decoction', type: 'decoction', difficulty: 'easy', ingredients: [{item:'Rhizome', quantity:1, unit:'tsp'}], steps: ['Boil and reduce'], dosage: '30 ml', duration: 'As needed' }],
    active_compounds: ['Cyperene', 'Rotundone', 'Alpha-cyperone'], regions_in_india: ['Punjab', 'Uttar Pradesh', 'Madhya Pradesh']
  },
  'gokshura': {
    medicinal_uses: [{ ailment_name: 'Kidney Stones & Libido', effectiveness: 'High', description: 'Diuretic action flushes stones; protodioscin converts to DHEA naturally.', scientifically_proven: true }],
    drug_interactions: ['Lithium: diuretic effect increases lithium toxicity risk'], toxicity: { level: 'none', details: 'Safe.' },
    preparations: [{ name: 'Gokshura Kadha', type: 'decoction', difficulty: 'easy', ingredients: [{item:'Fruit', quantity:1, unit:'tsp'}], steps: ['Boil in water'], dosage: '1 cup', duration: 'Daily' }],
    active_compounds: ['Protodioscin', 'Tribulosin', 'Diosgenin'], regions_in_india: ['Rajasthan', 'Gujarat', 'Haryana']
  },
  'punarnava': {
    medicinal_uses: [{ ailment_name: 'Edema & Kidney Failure', effectiveness: 'High', description: 'Powerful diuretic lacking potassium depletion, renoprotective.', scientifically_proven: true }],
    drug_interactions: ['Diuretics: additive effect', 'BP meds: may lower blood pressure'], toxicity: { level: 'none', details: 'Excellent safety profile.' },
    preparations: [{ name: 'Punarnava Extract', type: 'juice', difficulty: 'medium', ingredients: [{item:'Fresh Plant', quantity:1, unit:'handful'}], steps: ['Crush and extract juice'], dosage: '20 ml', duration: 'Morning' }],
    active_compounds: ['Punarnavine', 'Boeravinone', 'Ursolic Acid'], regions_in_india: ['All over India (Wild Weed)']
  },
  'vasaka-malabar-nut': {
    medicinal_uses: [{ ailment_name: 'Bronchitis & Asthma', effectiveness: 'High', description: 'Vasicine is a proven powerful bronchodilator and expectorant.', scientifically_proven: true }],
    drug_interactions: ['Cough suppressants: contradicts expectorant action'], toxicity: { level: 'low', details: 'Very large doses cause vomiting and diarrhea.' },
    preparations: [{ name: 'Vasaka Juice', type: 'juice', difficulty: 'easy', ingredients: [{item:'Leaves', quantity:5, unit:'pieces'}], steps: ['Crush and mix with honey'], dosage: '1 tsp', duration: '3 times daily' }],
    active_compounds: ['Vasicine', 'Vasicinone', 'Adhatodine'], regions_in_india: ['Punjab', 'Assam', 'Kerala']
  },
  'manjistha': {
    medicinal_uses: [{ ailment_name: 'Acne & Skin Pigmentation', effectiveness: 'High', description: 'Blood purifier that inhibits tyrosinase activity (skin brightening).', scientifically_proven: true }],
    drug_interactions: ['None widely documented'], toxicity: { level: 'none', details: 'May temporarily turn urine orange/red safely.' },
    preparations: [{ name: 'Manjistha Tea', type: 'infusion', difficulty: 'easy', ingredients: [{item:'Powder', quantity:0.5, unit:'tsp'}], steps: ['Steep in warm water'], dosage: '1 cup', duration: 'Daily' }],
    active_compounds: ['Purpurin', 'Munjistin', 'Alizarin'], regions_in_india: ['Himachal Pradesh', 'Sikkim', 'Maharashtra (Hills)']
  },
  'chirata': {
    medicinal_uses: [{ ailment_name: 'Malaria & Chronic Fevers', effectiveness: 'High', description: 'Extremely bitter tonic that reduces fever and protects liver.', scientifically_proven: true }],
    drug_interactions: ['Diabetes meds: lowers blood sugar significantly'], toxicity: { level: 'moderate', details: 'Too bitter; induces vomiting in kids.' },
    preparations: [{ name: 'Cold Infusion', type: 'infusion', difficulty: 'easy', ingredients: [{item:'Stems', quantity:1, unit:'pinch'}], steps: ['Soak overnight'], dosage: '30 ml', duration: 'Morning' }],
    active_compounds: ['Amarogentin', 'Swerchirin', 'Swertiamarin'], regions_in_india: ['Kashmir', 'Himachal Pradesh', 'Meghalaya']
  },
  'kachnar': {
    medicinal_uses: [{ ailment_name: 'Hypothyroidism & Goiter', effectiveness: 'Moderate', description: 'Promotes thyroid hormone secretion and shrinks glandular cysts.', scientifically_proven: false }],
    drug_interactions: ['Thyroid replacement: closely monitor hormone levels'], toxicity: { level: 'none', details: 'Safe to consume.' },
    preparations: [{ name: 'Kachnar Bark Kadha', type: 'decoction', difficulty: 'medium', ingredients: [{item:'Bark', quantity:1, unit:'inch'}], steps: ['Boil and reduce'], dosage: '30 ml', duration: 'Twice daily' }],
    active_compounds: ['Kaempferol', 'Rutin', 'Quercetin'], regions_in_india: ['Assam', 'Madhya Pradesh', 'Uttar Pradesh']
  },
  'patharchatta-bryophyllum': {
    medicinal_uses: [{ ailment_name: 'Kidney Stones (Lithiasis)', effectiveness: 'High', description: 'Alkalizes urine and breaks down calcium oxalate crystals.', scientifically_proven: true }],
    drug_interactions: ['Immunosuppressants: mild suppressive activity itself'], toxicity: { level: 'none', details: 'Safe for daily raw consumption.' },
    preparations: [{ name: 'Raw Leaf', type: 'raw', difficulty: 'easy', ingredients: [{item:'Leaves', quantity:2, unit:'pieces'}], steps: ['Chew thoroughly'], dosage: '2 leaves', duration: 'Empty stomach' }],
    active_compounds: ['Bryophyllin A', 'Quercetin-3-diarabinoside', 'Kaempferol'], regions_in_india: ['West Bengal', 'Kerala', 'Tamil Nadu']
  },
  'aparajita-butterfly-pea': {
    medicinal_uses: [{ ailment_name: 'Anxiety & Memory Deficits', effectiveness: 'Moderate', description: 'Increases acetylcholine levels in hippocampus safely.', scientifically_proven: true }],
    drug_interactions: ['None widely documented'], toxicity: { level: 'none', details: 'Safe culinary tea.' },
    preparations: [{ name: 'Blue Tea', type: 'infusion', difficulty: 'easy', ingredients: [{item:'Flowers', quantity:5, unit:'pieces'}], steps: ['Steep in hot water'], dosage: '1 cup', duration: 'Evening' }],
    active_compounds: ['Ternatins (Anthocyanins)', 'Taraxerol', 'Delphinidin'], regions_in_india: ['Kerala', 'Andhra Pradesh', 'West Bengal']
  },
  'amaltas-golden-shower': {
    medicinal_uses: [{ ailment_name: 'Constipation', effectiveness: 'High', description: 'Anthraquinones act as a mild, safe, non-cramping laxative.', scientifically_proven: true }],
    drug_interactions: ['Digoxin: potassium loss from diarrhea increases digoxin toxicity'], toxicity: { level: 'low', details: 'Excess causes severe diarrhea and hypokalemia.' },
    preparations: [{ name: 'Pod Pulp Water', type: 'infusion', difficulty: 'easy', ingredients: [{item:'Black pulp', quantity:1, unit:'tbsp'}], steps: ['Soak in water and drink'], dosage: '1 tbsp pulp', duration: 'Nightly' }],
    active_compounds: ['Sennosides', 'Rhein', 'Fistulin'], regions_in_india: ['Tamil Nadu', 'Kerala', 'Karnataka']
  },
  'karela-bitter-gourd': {
    medicinal_uses: [{ ailment_name: 'Diabetes Mellitus', effectiveness: 'High', description: 'Contains plant-insulin (Polypeptide-p) directly lowering blood glucose.', scientifically_proven: true }],
    drug_interactions: ['Insulin & Metformin: extreme hypoglycemia risk'], toxicity: { level: 'moderate', details: 'Seeds contain vicine causing favism; abortifacient in pregnancy.' },
    preparations: [{ name: 'Karela Juice', type: 'juice', difficulty: 'easy', ingredients: [{item:'Fresh Karela', quantity:1, unit:'piece'}], steps: ['Deseed and blend'], dosage: '30 ml', duration: 'Morning' }],
    active_compounds: ['Charantin', 'Polypeptide-p', 'Vicine'], regions_in_india: ['Punjab', 'Maharashtra', 'Uttar Pradesh']
  },
  'moringa-drumstick': {
    medicinal_uses: [{ ailment_name: 'Malnutrition & Anemia', effectiveness: 'High', description: 'Extremely dense source of bioavailable iron, B-vitamins, and protein.', scientifically_proven: true }],
    drug_interactions: ['Levothyroxine: may decrease absorption', 'Diabetes meds: lowers blood sugar'], toxicity: { level: 'low', details: 'Root bark contains toxic alkaloid spirchin (avoid).' },
    preparations: [{ name: 'Moringa Powder', type: 'powder', difficulty: 'easy', ingredients: [{item:'Leaf Powder', quantity:1, unit:'tsp'}], steps: ['Mix into food or water'], dosage: '1 tsp', duration: 'Daily' }],
    active_compounds: ['Zeatin', 'Quercetin', 'Chlorogenic Acid'], regions_in_india: ['Tamil Nadu', 'Andhra Pradesh', 'Karnataka']
  },
  'banyan-bargad': {
    medicinal_uses: [{ ailment_name: 'Bleeding Gums & Oral Ulcers', effectiveness: 'High', description: 'Astringent tannins immediately coagulate proteins and seal wounds.', scientifically_proven: true }],
    drug_interactions: ['None topically'], toxicity: { level: 'none', details: 'Safe topically.' },
    preparations: [{ name: 'Latex Application', type: 'raw', difficulty: 'easy', ingredients: [{item:'Latex', quantity:1, unit:'drop'}], steps: ['Snap leaf and apply white sap'], dosage: 'Topical', duration: 'As needed' }],
    active_compounds: ['Bengalenoside', 'Leucocyanidin', 'Tiglic acid'], regions_in_india: ['Gujarat', 'Maharashtra', 'Madhya Pradesh']
  },
  'peepal-ficus-religiosa': {
    medicinal_uses: [{ ailment_name: 'Asthma & Toothache', effectiveness: 'Moderate', description: 'Bark decoction acts as an astringent and mild bronchodilator.', scientifically_proven: false }],
    drug_interactions: ['None widely documented'], toxicity: { level: 'none', details: 'Safe.' },
    preparations: [{ name: 'Bark Decoction', type: 'decoction', difficulty: 'medium', ingredients: [{item:'Bark', quantity:1, unit:'inch'}], steps: ['Boil in water and gargle'], dosage: '30 ml', duration: 'Twice daily' }],
    active_compounds: ['Campesterol', 'Stigmasterol', 'Tannic Acid'], regions_in_india: ['Uttar Pradesh', 'Bihar', 'West Bengal']
  },
  'jamun-java-plum': {
    medicinal_uses: [{ ailment_name: 'Type 2 Diabetes', effectiveness: 'High', description: 'Jamboline prevents the diastatic conversion of starch into sugar.', scientifically_proven: true }],
    drug_interactions: ['Antidiabetics: massive synergistic effect, risk of severe hypoglycemia'], toxicity: { level: 'none', details: 'Raw fruit causes throat irritation.' },
    preparations: [{ name: 'Seed Powder', type: 'powder', difficulty: 'easy', ingredients: [{item:'Seed Powder', quantity:1, unit:'tsp'}], steps: ['Mix in warm water'], dosage: '1 tsp', duration: 'Before meals' }],
    active_compounds: ['Jamboline', 'Ellagic acid', 'Anthocyanins'], regions_in_india: ['Maharashtra', 'Uttar Pradesh', 'Gujarat']
  },
  'guava-amrood': {
    medicinal_uses: [{ ailment_name: 'Diarrhea & Dental Plaque', effectiveness: 'High', description: 'High quercetin arrests excessive bowel movements instantly.', scientifically_proven: true }],
    drug_interactions: ['None widely documented'], toxicity: { level: 'none', details: 'Highly safe.' },
    preparations: [{ name: 'Guava Leaf Tea', type: 'decoction', difficulty: 'easy', ingredients: [{item:'Tender Leaves', quantity:5, unit:'pieces'}], steps: ['Boil in water'], dosage: '1 cup', duration: 'During diarrhea' }],
    active_compounds: ['Quercetin', 'Gallic Acid', 'Caryophyllene'], regions_in_india: ['Bihar', 'Uttar Pradesh', 'Maharashtra']
  },
  'papaya': {
    medicinal_uses: [{ ailment_name: 'Dengue Fever / Thrombocytopenia', effectiveness: 'High', description: 'Rapidly upregulates ALOX12 and PTAFR genes increasing platelet production.', scientifically_proven: true }],
    drug_interactions: ['Blood thinners: may increase bleeding risk slightly', 'Amiodarone: increases bioavailability'], toxicity: { level: 'moderate', details: 'Latex/unripe fruit causes spontaneous abortion.' },
    preparations: [{ name: 'Leaf Juice', type: 'juice', difficulty: 'medium', ingredients: [{item:'Fresh leaves', quantity:2, unit:'pieces'}], steps: ['Crush and squeeze green juice'], dosage: '25 ml', duration: 'Twice daily' }],
    active_compounds: ['Papain', 'Carpaine', 'Chymopapain'], regions_in_india: ['Andhra Pradesh', 'Gujarat', 'Karnataka']
  },
  'coriander-dhaniya': {
    medicinal_uses: [{ ailment_name: 'UTI & Acidity', effectiveness: 'High', description: 'Cooling diuretic that flushes kidneys and neutralizes excess Pitta heat.', scientifically_proven: false }],
    drug_interactions: ['Antihypertensives: may drop blood pressure further'], toxicity: { level: 'none', details: 'Culinary safe.' },
    preparations: [{ name: 'Dhaniya Water', type: 'infusion', difficulty: 'easy', ingredients: [{item:'Seeds', quantity:1, unit:'tbsp'}], steps: ['Soak overnight, drink water'], dosage: '1 glass', duration: 'Morning' }],
    active_compounds: ['Linalool', 'Alpha-pinene', 'Geranyl acetate'], regions_in_india: ['Madhya Pradesh', 'Rajasthan', 'Gujarat']
  },
  'fennel-saunf': {
    medicinal_uses: [{ ailment_name: 'Bloating & Infantile Colic', effectiveness: 'High', description: 'Relaxes smooth muscle of the digestive tract preventing spasms.', scientifically_proven: true }],
    drug_interactions: ['Ciprofloxacin: decreases absorption of antibiotic', 'Estrogen pills: mild phytoestrogenic interference'], toxicity: { level: 'low', details: 'Excess essential oil toxic.' },
    preparations: [{ name: 'Fennel Chew', type: 'raw', difficulty: 'easy', ingredients: [{item:'Seeds', quantity:1, unit:'tsp'}], steps: ['Chew thoroughly'], dosage: '1 tsp', duration: 'After meals' }],
    active_compounds: ['Anethole', 'Fenchone', 'Estragole'], regions_in_india: ['Rajasthan', 'Gujarat', 'Uttar Pradesh']
  }
};
