// Translations for the portfolio
const translations = {
    fr: {
        // Navigation
        'nav.home': 'Accueil',
        'nav.interests': 'Intérêts',
        'nav.publications': 'Publications',
        'nav.projects': 'Projets',
        'nav.experience': 'Expérience',
        'nav.skills': 'Compétences',
        'nav.resume': 'Résume/CV',
        'nav.contact': 'Contact',

        // SEO
        'seo.description': 'Portfolio de Oscar HOUESSOU, Data Scientist & Chercheur en IA. Expert en Deep Learning, NLP, RAG, Vision par Ordinateur et Scoring de Crédit.',
        'seo.keywords': 'Oscar Houessou, Data Scientist, IA, Bénin, Deep Learning, NLP, RAG, Computer Vision, Scoring, Portfolio',

        // Hero Section
        'hero.badge': 'Data Scientist & Chercheur en IA',
        'hero.name': 'Oscar HOUESSOU',
        'hero.title': 'Ingénieur en Intelligence Artificielle et Modélisation',
        'hero.subtitle': 'Data Scientist passionné par la résolution de problèmes métiers complexes grâce à l\'IA. Fort d\'une expérience en recherche académique et en industrie, je développe des solutions d\'IA à fort impact : chatbots intelligents, modèles de vision par ordinateur, scoring de crédit, et outils d\'IA explicable pour garantir transparence et confiance.',
        'hero.location': '📍 Cotonou, Bénin | 💼 Data Scientist @ Gozem | 🔬 Chercheur en IA',
        'hero.btn.projects': '🚀 Voir mes réalisations',
        'hero.btn.cv': '📄 Télécharger CV',
        'hero.btn.contact': '✉️ Me contacter',

        // Interests Section
        'interests.badge': '🔬 Expertise Technique',
        'interests.title': 'Domaines d\'Expertise',
        'interests.subtitle': 'Compétences approfondies et axes de recherche privilégiés',
        'interests.nlp.title': 'NLP & Generative AI',
        'interests.nlp.desc': 'Conception d\'agents conversationnels avancés et systèmes RAG pour l\'automatisation du support client',
        'interests.dl.title': 'Deep Learning (CNN, RNN)',
        'interests.dl.desc': 'Réseaux de neurones convolutifs et récurrents pour le traitement de données séquentielles',
        'interests.xai.title': 'IA Explicable (XAI)',
        'interests.xai.desc': 'Développement de modèles interprétables pour garantir la transparence des décisions de l\'IA',
        'interests.ts.title': 'Séries Temporelles',
        'interests.ts.desc': 'Modélisation prédictive de séquences avec LSTM et GRU pour des phénomènes dynamiques',
        'interests.ml.title': 'Classification Multi-étiquettes',
        'interests.ml.desc': 'Systèmes de classification capables de détecter plusieurs catégories simultanément',
        'interests.mlops.title': 'MLOps & Engineering',
        'interests.mlops.desc': 'Déploiement, surveillance et maintenance de modèles d\'IA en production',

        // Publications Section
        'publications.badge': '📚 Publications',
        'publications.title': 'Publications Scientifiques',
        'publications.subtitle': 'Contributions à la recherche en modélisation hydrologique et Deep Learning',
        'publications.link': '🔗 Consulter la publication →',
        'publications.paper1.badge': '2024 • Journal International',
        'publications.paper1.title': 'Comparison of Two Recurrent Neural Networks for Rainfall-Runoff Modeling',
        'publications.paper1.journal': '📖 Journal of Geoscience and Environment Protection<br>DOI: 10.4236/gep.2024.129009',
        'publications.paper1.authors': '👥 HOUESSOU, O., et al.',
        'publications.paper1.summary': 'Comparaison des performances de deux architectures de réseaux de neurones récurrents (LSTM vs GRU) pour la modélisation de la relation pluie-débit dans un contexte hydrologique.',
        'publications.paper2.badge': '2023 • Journal International',
        'publications.paper2.title': 'Modeling River Discharge Using Deep Learning',
        'publications.paper2.journal': '📖 International Journal of Geography, Geology and Geosciences',
        'publications.paper2.authors': '👥 HOUESSOU, O., et al.',
        'publications.paper2.summary': 'Application des techniques de deep learning pour la modélisation du débit fluvial avec évaluation comparative des modèles pour la prédiction de séquences non linéaires.',

        // Projects Section
        'projects.badge': '💡 Réalisations',
        'projects.title': 'Projets Significatifs',
        'projects.subtitle': 'Solutions innovantes développées et déployées',
        'projects.datatalk.title': '🤖 DataTalk - Analyse de Données',
        'projects.datatalk.desc': 'Application interactive permettant d\'analyser vos données en langage naturel. Posez des questions et obtenez des insights automatiques instantanés.',
        'projects.datatalk.link': '🔗 Découvrir DataTalk →',
        'projects.chatbot.title': '💬 Gozem AI Chatbot',
        'projects.chatbot.desc': 'Chatbot intelligent développé pour Gozem, capable de répondre aux questions des utilisateurs et de fournir une assistance automatisée de haute qualité.',
        'projects.chatbot.link': '🔗 Tester le Chatbot →',
        'projects.hymolap.title': '🌊 HyMoLap - Simulation Hydrologique',
        'projects.hymolap.desc': 'Application interactive Shiny pour la simulation et la visualisation de données temporelles hydrologiques. Outil développé pour faciliter la compréhension et l\'analyse de systèmes dynamiques complexes.',
        'projects.hymolap.link': '🔗 Découvrir l\'application →',


        // Experience Section
        'experience.badge': '💼 Expérience',
        'experience.title': 'Parcours Professionnel',
        'experience.gozem.role': 'Data Scientist – Gozem Bénin',
        'experience.gozem.date': 'Mars 2023 – Aujourd\'hui',
        'experience.gozem.intro': 'En tant que Data Scientist chez Gozem, je développe des solutions d\'IA avancées pour optimiser les opérations et améliorer l\'expérience utilisateur.',
        'experience.gozem.task1': '<strong>Chatbot & NLP :</strong> Développement d\'un chatbot de support client intelligent alimenté par RAG (Retrieval-Augmented Generation) et des techniques NLP avancées, améliorant la résolution au premier contact de 50%.',
        'experience.gozem.task2': '<strong>Vision par Ordinateur :</strong> Conception et déploiement de modèles utilisés par des milliers d\'utilisateurs pour l\'inspection automatisée de véhicules et la vérification de conformité du branding.',
        'experience.gozem.task3': '<strong>Modélisation de Risque & Crédit :</strong> Développement de modèles de scoring pour l\'éligibilité au financement de véhicules et d\'outils d\'analyse prédictive pour soutenir les opérations de financement (Champions V+, prix de revente).',
        'experience.gozem.task4': '<strong>IA Explicable (XAI) :</strong> Implémentation d\'outils XAI pour garantir la transparence et la responsabilité des modèles dans des contextes opérationnels à enjeux élevés.',
        'experience.gozem.task5': '<strong>Business Intelligence (BI) :</strong> Architecture de l\'écosystème BI (+50 tableaux de bord Looker Studio) pilotant l\'intégralité du cycle de financement, de la collecte et de la gestion des stocks.',
        'experience.gozem.task6': '<strong>Gouvernance des Données :</strong> Collaboration avec des équipes transverses pour la qualité et la gouvernance des données. Automatisation du cycle de vie des accès.',
        'experience.gozem.task7': '<strong>Performance Opérationnelle :</strong> Traitement des analyses d\'impact avec un taux de respect des délais de 95% (SLA < 48h).',
        'experience.education': 'Formation Académique',

        // Skills Section
        'skills.badge': '⚡ Compétences',
        'skills.title': 'Compétences Techniques',
        'skills.languages.title': 'Langages de Programmation',
        'skills.frameworks.title': 'Frameworks ML/DL',
        'skills.expertise.title': 'Domaines d\'Expertise',
        'skills.tools.title': 'Outils & DevOps',
        'skills.data.title': 'Traitement de Données',
        'skills.modeling.title': 'Modélisation & Analyse',
        'skills.lang.title': 'Langues',

        // Contact Section
        'contact.badge': '✉️ Contact',
        'contact.title': 'Me Contacter',
        'contact.subtitle': 'Contactez-moi pour discuter de collaborations techniques ou de projets innovants',
        'contact.email': 'Email',
        'contact.phone': 'Téléphone',
        'contact.linkedin': 'LinkedIn',
        'contact.location': 'Localisation',

        // Footer
        'footer.rights': '© 2025 Oscar HOUESSOU. Tous droits réservés.',
        'footer.tagline': 'Ingénieur en IA passionné par la recherche en Deep Learning'
    },
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.interests': 'Interests',
        'nav.publications': 'Publications',
        'nav.projects': 'Projects',
        'nav.experience': 'Experience',
        'nav.skills': 'Skills',
        'nav.resume': 'Resume/CV',
        'nav.contact': 'Contact',

        // SEO
        'seo.description': 'Portfolio of Oscar HOUESSOU, Data Scientist & AI Researcher. Expert in Deep Learning, NLP, RAG, Computer Vision, and Credit Scoring.',
        'seo.keywords': 'Oscar Houessou, Data Scientist, AI, Benin, Deep Learning, NLP, RAG, Computer Vision, Scoring, Portfolio',

        // Hero Section
        'hero.badge': 'Data Scientist & AI Researcher',
        'hero.name': 'Oscar HOUESSOU',
        'hero.title': 'Artificial Intelligence & Modeling Engineer',
        'hero.subtitle': 'Data Scientist passionate about solving complex business problems through AI. With experience in both academic research and industry, I develop high-impact AI solutions: intelligent chatbots, computer vision models, credit scoring, and explainable AI tools to ensure transparency and trust.',
        'hero.location': '📍 Cotonou, Benin | 💼 Data Scientist @ Gozem | 🔬 AI Researcher',
        'hero.btn.projects': '🚀 View my work',
        'hero.btn.cv': '📄 Download CV',
        'hero.btn.contact': '✉️ Contact me',

        // Interests Section
        'interests.badge': '🔬 Technical Expertise',
        'interests.title': 'Areas of Expertise',
        'interests.subtitle': 'In-depth skills and preferred research areas',
        'interests.nlp.title': 'NLP & Generative AI',
        'interests.nlp.desc': 'Design of advanced conversational agents and RAG systems for customer support automation',
        'interests.dl.title': 'Deep Learning (CNN, RNN)',
        'interests.dl.desc': 'Convolutional and recurrent neural networks for sequential data processing',
        'interests.xai.title': 'Explainable AI (XAI)',
        'interests.xai.desc': 'Developing interpretable models to ensure transparency in AI decisions',
        'interests.ts.title': 'Time Series',
        'interests.ts.desc': 'Predictive modeling of sequences with LSTM and GRU for dynamic phenomena',
        'interests.ml.title': 'Multi-label Classification',
        'interests.ml.desc': 'Classification systems capable of detecting multiple categories simultaneously',
        'interests.mlops.title': 'MLOps & Engineering',
        'interests.mlops.desc': 'Deployment, monitoring, and maintenance of AI models in production',

        // Publications Section
        'publications.badge': '📚 Publications',
        'publications.title': 'Scientific Publications',
        'publications.subtitle': 'Contributions to research in hydrological modeling and Deep Learning',
        'publications.link': '🔗 View publication →',
        'publications.paper1.badge': '2024 • International Journal',
        'publications.paper1.title': 'Comparison of Two Recurrent Neural Networks for Rainfall-Runoff Modeling',
        'publications.paper1.journal': '📖 Journal of Geoscience and Environment Protection<br>DOI: 10.4236/gep.2024.129009',
        'publications.paper1.authors': '👥 HOUESSOU, O., et al.',
        'publications.paper1.summary': 'Performance comparison of two recurrent neural network architectures (LSTM vs GRU) for rainfall-runoff modeling in a hydrological context.',
        'publications.paper2.badge': '2023 • International Journal',
        'publications.paper2.title': 'Modeling River Discharge Using Deep Learning',
        'publications.paper2.journal': '📖 International Journal of Geography, Geology and Geosciences',
        'publications.paper2.authors': '👥 HOUESSOU, O., et al.',
        'publications.paper2.summary': 'Application of deep learning techniques for river discharge modeling with comparative evaluation of models for non-linear sequence prediction.',

        // Projects Section
        'projects.badge': '💡 Achievements',
        'projects.title': 'Significant Projects',
        'projects.subtitle': 'Innovative solutions developed and deployed',
        'projects.datatalk.title': '🤖 DataTalk - Data Analysis',
        'projects.datatalk.desc': 'Interactive application for analyzing your data in natural language. Ask questions and get instant automatic insights.',
        'projects.datatalk.link': '🔗 Discover DataTalk →',
        'projects.chatbot.title': '💬 Gozem AI Chatbot',
        'projects.chatbot.desc': 'Intelligent chatbot developed for Gozem, capable of answering user questions and providing high-quality automated assistance.',
        'projects.chatbot.link': '🔗 Try the Chatbot →',
        'projects.hymolap.title': '🌊 HyMoLap - Hydrological Simulation',
        'projects.hymolap.desc': 'Interactive Shiny application for simulation and visualization of hydrological time series data. Tool developed to facilitate understanding and analysis of complex dynamic systems.',
        'projects.hymolap.link': '🔗 Discover the app →',


        // Experience Section
        'experience.badge': '💼 Experience',
        'experience.title': 'Professional Background',
        'experience.gozem.role': 'Data Scientist – Gozem Benin',
        'experience.gozem.date': 'March 2023 – Present',
        'experience.gozem.intro': 'As a Data Scientist at Gozem, I develop advanced AI solutions to optimize operations and enhance user experience.',
        'experience.gozem.task1': '<strong>Chatbot & NLP:</strong> Developed an intelligent customer support chatbot powered by RAG and advanced NLP techniques, improving first-contact resolution by 50%.',
        'experience.gozem.task2': '<strong>Computer Vision:</strong> Built and deployed models used by thousands of users for automated vehicle inspection and visual compliance verification of branding.',
        'experience.gozem.task3': '<strong>Financing & Risk Modeling:</strong> Developed credit-scoring models for vehicle lease financing eligibility and predictive analytics tools to support financing operations (Champions V+, resale prices).',
        'experience.gozem.task4': '<strong>Explainable AI (XAI):</strong> Implemented XAI tools to ensure model transparency and accountability in high-stakes operational contexts.',
        'experience.gozem.task5': '<strong>Business Intelligence (BI):</strong> Architected the BI ecosystem (+50 Looker Studio dashboards) driving the entire financing cycle, collection, and inventory management.',
        'experience.gozem.task6': '<strong>Data Governance:</strong> Collaborated with cross-functional teams on data governance. Automated access lifecycle.',
        'experience.gozem.task7': '<strong>Operational Performance:</strong> Handled impact analyses and financing team requests with a 95% on-time delivery rate (SLA < 48h).',
        'experience.education': 'Academic Background',

        // Skills Section
        'skills.badge': '⚡ Skills',
        'skills.title': 'Technical Skills',
        'skills.languages.title': 'Programming Languages',
        'skills.frameworks.title': 'ML/DL Frameworks',
        'skills.expertise.title': 'Areas of Expertise',
        'skills.tools.title': 'Tools & DevOps',
        'skills.data.title': 'Data Processing',
        'skills.modeling.title': 'Modeling & Analysis',
        'skills.lang.title': 'Languages',

        // Contact Section
        'contact.badge': '✉️ Contact',
        'contact.title': 'Get in Touch',
        'contact.subtitle': 'Contact me to discuss technical collaborations or innovative projects',
        'contact.email': 'Email',
        'contact.phone': 'Phone',
        'contact.linkedin': 'LinkedIn',
        'contact.location': 'Location',

        // Footer
        'footer.rights': '© 2025 Oscar HOUESSOU. All rights reserved.',
        'footer.tagline': 'AI Engineer passionate about Deep Learning research'
    }
};

// Language switching functionality
let currentLang = localStorage.getItem('preferredLanguage') || 'fr';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('preferredLanguage', lang);

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            // Use innerHTML to allow html tags like <strong> in translations
            element.innerHTML = translations[lang][key];
        }
    });

    // Update language toggle button state
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-lang="${lang}"]`).classList.add('active');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLang);

    // Add click handlers to language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = btn.getAttribute('data-lang');
            setLanguage(lang);
        });
    });
});
