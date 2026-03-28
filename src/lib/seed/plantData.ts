import { Plant } from '@/types/plant';

export const mockPlants: Partial<Plant>[] = [
  {
    slug: 'tulsi-holy-basil',
    scientific_name: 'Ocimum sanctum',
    family: 'Lamiaceae',
    common_names: {
      english: 'Holy Basil',
      hindi: 'तुलसी (Tulsi)',
      regional: ['Tulasi (Sanskrit, Telugu, Marathi)', 'Thulasi (Tamil, Malayalam)', 'Kala Tulsi', 'Krishna Tulsi'],
    },
    description: 'An erect, much-branched subshrub, 30-60 cm tall with hairy stems. Leaves are green or purple, simple, petioled, with an ovate blade up to 5 cm long. The flowers are small, purplish in elongate racemes in close whorls.',
    habitat: 'Widely cultivated throughout India as a sacred plant in Hindu courtyards and temples; also found wildly escaping cultivation.',
    regions_in_india: ['Uttar Pradesh', 'Madhya Pradesh', 'Maharashtra', 'Karnataka', 'Tamil Nadu', 'West Bengal', 'All over India (Cultivated)'],
    identification_features: ['Distinctive aromatic scent', 'Opposite green or purple leaves', 'Square stems', 'Small purplish or white tubular flowers'],
    parts_used: ['Leaves', 'Seeds', 'Roots', 'Whole plant'],
    images: [
      {
        url: '/images/plants/tulsi-holy-basil.jpg',
        alt: 'Tulsi Leaves Profile',
        caption: 'Fresh green Rama Tulsi leaves',
        isPrimary: true,
      }
    ],
    medicinal_uses: [
      {
        ailment_name: 'Respiratory Infections (Cough, Cold, Asthma)',
        effectiveness: 'High',
        description: 'Expectorant and bronchodilator properties help clear airways, reduce inflammation, and suppress persistent coughs.',
        scientifically_proven: true,
      },
      {
        ailment_name: 'Fever (Pyrexia)',
        effectiveness: 'High',
        description: 'Acts as an antipyretic and diaphoretic to induce sweating and lower body temperature, particularly useful in malarial fevers.',
        scientifically_proven: true,
      },
      {
        ailment_name: 'Stress and Anxiety (Adaptogen)',
        effectiveness: 'High',
        description: 'Regulates cortisol levels and helps the body adapt to physical and psychological stress.',
        scientifically_proven: true,
      },
      {
        ailment_name: 'Digestive Issues',
        effectiveness: 'Moderate',
        description: 'Reduces bloating, gas, and stomach cramps due to its mild antispasmodic qualities.',
        scientifically_proven: false,
      },
      {
        ailment_name: 'Immunomodulation',
        effectiveness: 'High',
        description: 'Boosts production of T-helper cells and natural killer cells, fortifying the immune system.',
        scientifically_proven: true,
      }
    ],
    preparations: [
      {
        name: 'Tulsi Kadha (Decoction)',
        type: 'decoction',
        difficulty: 'easy',
        ingredients: [
          { item: 'Fresh Tulsi Leaves', quantity: 10, unit: 'leaves' },
          { item: 'Black Pepper (Crushed)', quantity: 2, unit: 'peppercorns' },
          { item: 'Ginger', quantity: 0.5, unit: 'inch piece' },
          { item: 'Water', quantity: 2, unit: 'cups' },
          { item: 'Honey or Jaggery', quantity: 1, unit: 'teaspoon', notes: 'Add after cooling slightly' }
        ],
        steps: [
          'Wash the Tulsi leaves thoroughly.',
          'Crush the ginger and black pepper slightly.',
          'Boil water in a pan and add all ingredients except honey.',
          'Reduce the heat and let it simmer until the water reduces to half.',
          'Strain the liquid into a cup.',
          'Add honey or jaggery once warm (do not add honey to boiling liquid).'
        ],
        dosage: '30-50 ml twice a day initially',
        duration: '3-5 days during acute cold/cough',
      },
      {
        name: 'Tulsi Fresh Juice (Svarasa)',
        type: 'juice',
        difficulty: 'easy',
        ingredients: [
          { item: 'Fresh Tulsi Leaves', quantity: 20, unit: 'leaves' }
        ],
        steps: [
          'Wash leaves thoroughly.',
          'Pound them using a mortar and pestle into a paste.',
          'Squeeze the paste through a clean muslin cloth to extract the juice.'
        ],
        dosage: '1-2 teaspoons mixed with an equal amount of honey.',
        duration: 'As needed for acute cough or indigestion.',
        precautions: ['Consume freshly made.']
      }
    ],
    safety_rating: 'green',
    safety_rationale: 'Generally Recognized as Safe (GRAS). High safety profile when consumed in typical medicinal or culinary doses.',
    precautions: ['May lower blood sugar cautiously in individuals on diabetes medication.', 'Stop taking 2 weeks before scheduled surgery as it may theoretically slow blood clotting.'],
    contraindications: ['Hypoglycemic states (low blood sugar)', 'Bleeding disorders'],
    side_effects: ['Mild nausea or diarrhea if taken in exceptionally large doses on an empty stomach.'],
    toxicity: {
      level: 'none',
      details: 'No notable toxicity reported in literature for normal doses.'
    },
    pregnancy_safe: false, 
    lactation_safe: true,
    drug_interactions: [
      'Anticoagulant / Antiplatelet drugs (Warfarin, Aspirin): Theoretical risk of increased bleeding.',
      'Antidiabetic drugs: Synergistic effect lowering blood sugar, monitor closely.'
    ],
    active_compounds: ['Eugenol', 'Ursolic Acid', 'Rosmarinic Acid', 'Linalool', 'Caryophyllene'],
  },
  {
    slug: 'neem-margosa',
    scientific_name: 'Azadirachta indica',
    family: 'Meliaceae',
    common_names: {
      english: 'Neem / Margosa Tree',
      hindi: 'नीम (Neem)',
      regional: ['Vepa (Telugu)', 'Veppam (Tamil)', 'Bevu (Kannada)', 'Nimba (Sanskrit)'],
    },
    description: 'A fast-growing, evergreen tree up to 15-20 meters tall. It has a broad, dense crown, with pinnate leaves containing 20-31 medium-to-dark green leaflets. The flowers are white and fragrant, arranged in drooping axillary panicles. Fruits are glabrous, olive-like drupes.',
    habitat: 'Thrives in dry, arid, and sub-humid conditions. Found growing naturally and widely cultivated across India.',
    regions_in_india: ['Tamil Nadu', 'Karnataka', 'Andhra Pradesh', 'Gujarat', 'Rajasthan', 'Uttar Pradesh', 'All over India'],
    identification_features: ['Distinctive bitter smell and taste', 'Pinnate leaves with asymmetric bases and serrated margins', 'Rough, deeply fissured dark grey bark'],
    parts_used: ['Leaves', 'Bark', 'Seeds', 'Oil (from seeds)', 'Twigs'],
    images: [
      {
        url: '/images/plants/neem.jpg',
        alt: 'Neem Leaves and Berries',
        caption: 'Neem leaves with small developing fruits',
        isPrimary: true,
      }
    ],
    medicinal_uses: [
      {
        ailment_name: 'Skin Diseases (Acne, Eczema, Psoriasis)',
        effectiveness: 'High',
        description: 'Potent antimicrobial and anti-inflammatory properties clear skin infections and soothe irritation.',
        scientifically_proven: true,
      },
      {
        ailment_name: 'Dental Plaque & Gingivitis',
        effectiveness: 'High',
        description: 'Chewing neem twigs releases antibacterial compounds that act as natural toothbrushes and prevent oral pathogens.',
        scientifically_proven: true,
      },
      {
        ailment_name: 'Intestinal Worms (Anthelmintic)',
        effectiveness: 'High',
        description: 'Leaf juice and bark decoction are powerful agents against parasitic intestinal worms.',
        scientifically_proven: true,
      },
      {
        ailment_name: 'Diabetes / Hyperglycemia',
        effectiveness: 'Moderate',
        description: 'Helps in modulating blood glucose levels, potentially delaying or reducing need for synthetic hypoglycemics.',
        scientifically_proven: true,
      }
    ],
    preparations: [
      {
        name: 'Neem Leaf Paste for Acne',
        type: 'paste',
        difficulty: 'easy',
        ingredients: [
          { item: 'Fresh Neem Leaves', quantity: 15, unit: 'leaves' },
          { item: 'Turmeric Powder', quantity: 0.25, unit: 'teaspoon' },
          { item: 'Rose Water or Plain Water', quantity: 1, unit: 'tablespoon' }
        ],
        steps: [
          'Wash the neem leaves.',
          'Grind them into a fine paste with turmeric and rose water.',
          'Apply the paste directly to the affected acne spots.',
          'Leave for 15-20 minutes, then wash off with cold water.'
        ],
        dosage: 'Apply topically 1-2 times daily',
        duration: 'Until acne clears (usually 3-7 days)',
        precautions: ['Can be slightly drying to the skin; moisturize afterward if needed.']
      },
      {
        name: 'Neem Water (For Bath/Skin Wash)',
        type: 'infusion',
        difficulty: 'easy',
        ingredients: [
          { item: 'Neem Leaves', quantity: 50, unit: 'leaves' },
          { item: 'Water', quantity: 1, unit: 'liter' }
        ],
        steps: [
          'Boil the water.',
          'Turn off heat, drop the neem leaves in, and cover the pot.',
          'Let it steep until the water turns light green and cools to room temperature.',
          'Strain and use as a final rinse after bathing.'
        ],
        dosage: 'External use',
        duration: 'Safe for daily use',
      }
    ],
    safety_rating: 'yellow',
    safety_rationale: 'External use is generally extremely safe. Internal use requires caution regarding duration and dosage. Not safe for infants or pregnant women.',
    precautions: ['Avoid continuous oral intake for more than a few weeks, as it may affect liver/kidneys.', 'Monitor blood sugar levels strictly if taken with diabetes medication.'],
    contraindications: ['Infants and small children (Neem oil can cause Reye-like syndrome)', 'Undergoing fertility treatments (known spermicidal and anti-fertility effects)'],
    side_effects: ['Vomiting or diarrhea if taking large oral doses.', 'Tiredness/fatigue in extreme overdoses.'],
    toxicity: {
      level: 'moderate',
      details: 'Neem oil is toxic to infants and can lead to severe metabolic acidosis and encephalopathy. Adults tolerate low doses well.'
    },
    pregnancy_safe: false, 
    lactation_safe: false,
    drug_interactions: [
      'Immunosuppressants: Neem can stimulate the immune system, decreasing the effectiveness of immunosuppressants.',
      'Antidiabetic drugs: Additive effect, risking hypoglycemia.'
    ],
    active_compounds: ['Azadirachtin', 'Nimbin', 'Nimbidin', 'Gedunin'],
  },
  {
    slug: 'ashwagandha-indian-ginseng',
    scientific_name: 'Withania somnifera',
    family: 'Solanaceae',
    common_names: {
      english: 'Ashwagandha / Indian Ginseng',
      hindi: 'अश्वगंधा (Ashwagandha)',
      regional: ['Amukkara (Tamil)', 'Vajigandha (Sanskrit)', 'Penneru Gadda (Telugu)'],
    },
    description: 'A short, tender perennial shrub growing 35-75 cm tall. Tomentose branches carry dull green, elliptic leaves. The flowers are small, green, and bell-shaped. The ripe fruit is orange-red.',
    habitat: 'Dry regions of India; prefers dry, stony soil with sun to partial shade.',
    regions_in_india: ['Madhya Pradesh', 'Punjab', 'Gujarat', 'Rajasthan', 'Haryana'],
    identification_features: ['Roots smell like a horse ("Ashwa" = horse, "Gandha" = smell)', 'Star-shaped protective calyx enclosing the red berry', 'White velvety hairs on the stems and leaves'],
    parts_used: ['Roots (Primary)', 'Leaves'],
    images: [
      {
        url: '/images/plants/ashwagandha.jpg',
        alt: 'Ashwagandha Plant',
        caption: 'Ashwagandha plant showing leaves and berries',
        isPrimary: true,
      }
    ],
    medicinal_uses: [
      {
        ailment_name: 'Stress and Anxiety',
        effectiveness: 'High',
        description: 'Reduces serum cortisol levels, acting as a prominent adaptogen to alleviate excessive stress.',
        scientifically_proven: true,
      },
      {
        ailment_name: 'Insomnia',
        effectiveness: 'High',
        description: 'Improves sleep quality and helps induce sleep naturally without dependency (the species name "somnifera" means sleep-inducing).',
        scientifically_proven: true,
      },
      {
        ailment_name: 'Weakness and Fatigue',
        effectiveness: 'High',
        description: 'Enhances physical endurance, muscle strength, and vitality (Rasayana in Ayurveda).',
        scientifically_proven: true,
      },
      {
        ailment_name: 'Male Infertility',
        effectiveness: 'High',
        description: 'Improves semen quality, sperm count, and motility while balancing reproductive hormones.',
        scientifically_proven: true,
      }
    ],
    preparations: [
      {
        name: 'Ashwagandha Milk (Kshirapak)',
        type: 'decoction',
        difficulty: 'easy',
        ingredients: [
          { item: 'Ashwagandha Root Powder', quantity: 0.5, unit: 'teaspoon (3g)' },
          { item: 'Milk', quantity: 1, unit: 'cup' },
          { item: 'Ghee (Optional)', quantity: 0.5, unit: 'teaspoon' },
          { item: 'Cardamom Powder', quantity: 1, unit: 'pinch' }
        ],
        steps: [
          'Warm the milk on low heat.',
          'Stir in the Ashwagandha powder continuously to prevent lumps.',
          'Add a pinch of cardamom for flavor and a half teaspoon of ghee if desired (ghee acts as an anupana/carrier).',
          'Drink warm.'
        ],
        dosage: '1 cup daily',
        duration: 'Usually taken at bedtime for 1-3 months continuously.',
      }
    ],
    safety_rating: 'green',
    safety_rationale: 'Generally safe and very well tolerated for long term use at therapeutic doses in healthy adults.',
    precautions: ['Can irritate the gastrointestinal tract if taken in huge doses.', 'People with autoimmune diseases (Rheumatoid arthritis, Lupus) should use cautiously as it stimulates the immune system.'],
    contraindications: ['Hyperthyroidism (can increase thyroid hormone production)'],
    side_effects: ['Mild drowsiness', 'Upset stomach in large quantities'],
    toxicity: {
      level: 'none',
      details: 'Low toxicity. Huge overdoses may cause vomiting and diarrhea.'
    },
    pregnancy_safe: false, // In large doses it can cause miscarriage
    lactation_safe: true, // Often used in India to support lactation, but consult doctor
    drug_interactions: [
      'Sedatives (Benzodiazepines, CNS depressants): May cause additive drowsiness.',
      'Thyroid hormone replacements: Could push thyroid levels too high.',
      'Immunosuppressants: May counteract their effects.'
    ],
    active_compounds: ['Withanolides (Withaferin A, Withanolide D)', 'Alkaloids (Somniferine, Tropine)'],
  }
];
