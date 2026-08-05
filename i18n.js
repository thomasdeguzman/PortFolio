const translations = new Map(Object.entries({
  'À propos': 'About',
  'Projets étudiants': 'Academic projects',
  'Projets personnels': 'Personal projects',
  'Cette section regroupe mes projets personnels autour du développement web, de l’intelligence artificielle, de l’automatisation et de la visualisation de données.': 'This section presents my personal projects in web development, artificial intelligence, automation and data visualisation.',
  'Diplômes et certifications': 'Degrees and certifications',
  'Étudiant ingénieur en mécanique des fluides, CFD et simulation numérique': 'Engineering student in fluid mechanics, CFD and numerical simulation',
  'SeaTech – Université de Toulon': 'SeaTech – University of Toulon',
  'Actuellement en dernière année à SeaTech – Université de Toulon, je présente ici une sélection des projets et travaux réalisés au cours de ma formation, ainsi que quelques réalisations personnelles.': 'Currently in my final year at SeaTech – University of Toulon, I present here a selection of the projects and work completed during my studies, along with several personal projects.',
  'Voir mes projets': 'View my projects',
  'Me contacter': 'Contact me',
  'Présentation': 'Profile',
  'Mon parcours d’ingénieur m’a permis de développer des compétences scientifiques et techniques à travers différents projets, allant de la modélisation de phénomènes physiques au développement d’outils numériques.': 'My engineering studies have enabled me to develop scientific and technical skills through projects ranging from modelling physical phenomena to developing numerical tools.',
  'J’apprécie particulièrement comprendre un problème, construire une méthode pour l’étudier et analyser les résultats obtenus.': 'I particularly enjoy understanding a problem, designing a method to investigate it and analysing the resulting data.',
  'Compétences clés': 'Key skills',
  'Mécanique des fluides': 'Fluid mechanics',
  'Simulation numérique': 'Numerical simulation',
  'Programmation scientifique': 'Scientific programming',
  'Analyse de données': 'Data analysis',
  'Rédaction technique': 'Technical writing',
  'Travail en équipe': 'Teamwork',
  'Mon parcours': 'My journey',
  'Faites défiler la frise horizontalement': 'Scroll horizontally through the timeline',
  'Survolez ou sélectionnez un événement pour en savoir plus.': 'Hover over or select an event to learn more.',
  'Cette section rassemble les principaux projets réalisés au cours de ma formation d’ingénieur. Ils portent sur la simulation numérique, la mécanique des fluides, les méthodes numériques et le calcul scientifique.': 'This section brings together the main projects completed during my engineering studies. They cover numerical simulation, fluid mechanics, numerical methods and scientific computing.',
  'Voir plus (résumé)': 'Read more (summary)',
  'Consulter le rapport': 'View report',
  'Objectif :': 'Objective:',
  'Objectifs :': 'Objectives:',
  'Méthodes :': 'Methods:',
  'Résultats :': 'Results:',
  'Compétences :': 'Skills:',
  'Problématique :': 'Research question:',
  'Démarche :': 'Approach:',
  'volumes finis': 'finite volumes',
  'aérodynamique': 'aerodynamics',
  'éléments finis': 'finite elements',
  'mécanique': 'mechanics',
  'différences finies': 'finite differences',
  'analyse numérique': 'numerical analysis',
  'analyse RANS': 'RANS analysis',
  'outils de production': 'production tools',
  'production industrielle': 'industrial production',
  'travail en équipe': 'teamwork',
  'modélisation': 'modelling',
  'hydrodynamique': 'hydrodynamics',
  'stabilité': 'stability',
  'intégration numérique': 'numerical integration',
  "analyse d'erreur": 'error analysis',
  'équations différentielles': 'differential equations',
  'convergence': 'convergence',
  'interpolation': 'interpolation',
  'expérimentation': 'experimentation',
  'autonomie': 'independent work',
  'visualisation': 'visualisation',
  'développement web': 'web development',
  'diplôme': 'degree',
  'aéronautique': 'aeronautics',
  'parcours scientifique': 'scientific studies',
  'EDP': 'PDEs',
  'Étude de l\'impact d\'un profil évolutif sur le profil d\'aile LS-0417': 'Study of the impact of a morphing profile on the LS-0417 airfoil',
  'Simulations CFD sous OpenFOAM pour la caractérisation aérodynamique et la validation de profils évolutifs. Études numériques 2D et 3D puis validation expérimentale en soufflerie.': 'OpenFOAM CFD simulations for aerodynamic characterisation and validation of morphing profiles. Two- and three-dimensional numerical studies followed by experimental wind-tunnel validation.',
  "Caractériser le comportement aérodynamique du profil LS-0417 par simulation numérique.": 'Characterise the aerodynamic behaviour of the LS-0417 airfoil through numerical simulation.',
  "Génération du maillage, mise en place des cas OpenFOAM, simulations pour différents angles d'attaque et post-traitement des résultats.": 'Mesh generation, OpenFOAM case setup, simulations at different angles of attack and post-processing of results.',
  "Analyse des coefficients aérodynamiques, des champs d'écoulement et de l'influence des paramètres numériques.": 'Analysis of aerodynamic coefficients, flow fields and the influence of numerical parameters.',
  'CFD, OpenFOAM, maillage, Linux, post-traitement, analyse de résultats.': 'CFD, OpenFOAM, meshing, Linux, post-processing and results analysis.',
  "Simulation d'un écoulement 2D autour d'un profil NACA 4412": '2D flow simulation around a NACA 4412 airfoil',
  'Modélisation turbulente RANS, analyse des coefficients aérodynamiques et étude de convergence de maillage.': 'RANS turbulence modelling, aerodynamic-coefficient analysis and mesh-convergence study.',
  "Étudier l'écoulement autour d'un profil NACA 4412 et analyser son comportement aérodynamique.": 'Study the flow around a NACA 4412 airfoil and analyse its aerodynamic behaviour.',
  'Comparaison de plusieurs configurations de simulation, étude de maillages et analyse des coefficients de portance et de traînée.': 'Comparison of several simulation configurations, mesh studies, and analysis of lift and drag coefficients.',
  "Mise en évidence de l'influence du maillage, des conditions numériques et de l'angle d'attaque sur les résultats.": 'Identification of the effects of the mesh, numerical conditions and angle of attack on the results.',
  'OpenFOAM, CFD, aérodynamique, post-traitement, analyse critique.': 'OpenFOAM, CFD, aerodynamics, post-processing and critical analysis.',
  "Modélisation et analyse du comportement d'un amortisseur de choc à lames": 'Modelling and behavioural analysis of a leaf-spring shock absorber',
  "Modélisation et analyse numérique avec le logiciel Abaqus d'un système mécanique.": 'Modelling and numerical analysis of a mechanical system using Abaqus.',
  "Modéliser le comportement mécanique d'un amortisseur de choc à lames à l'aide de la méthode des éléments finis.": 'Model the mechanical behaviour of a leaf-spring shock absorber using the finite-element method.',
  'Création du modèle numérique, définition des matériaux, des conditions aux limites et analyse sous Abaqus.': 'Creation of the numerical model, definition of materials and boundary conditions, and analysis in Abaqus.',
  'Observation des contraintes, des déplacements et du comportement global de la structure sous chargement.': 'Observation of stresses, displacements and the overall behaviour of the loaded structure.',
  'Abaqus, éléments finis, mécanique des structures, modélisation numérique.': 'Abaqus, finite elements, structural mechanics and numerical modelling.',
  "Résolution d'un problème elliptique 2D par éléments finis": 'Finite-element solution of a 2D elliptic problem',
  "Résolution numérique de l'équation de Laplace sur un domaine carré par la méthode des éléments finis.": 'Numerical solution of the Laplace equation on a square domain using the finite-element method.',
  "Résoudre l'équation de Laplace en 2D avec des conditions aux limites de Dirichlet.": 'Solve the 2D Laplace equation with Dirichlet boundary conditions.',
  'Formulation faible, discrétisation par éléments quadrilatéraux bilinéaires, assemblage de la matrice de rigidité et pénalisation des conditions aux limites.': 'Weak formulation, discretisation with bilinear quadrilateral elements, stiffness-matrix assembly and boundary-condition penalisation.',
  "Visualisation du champ de solution sous VisIt et étude de l'influence du raffinement du maillage sur la solution numérique.": 'Visualisation of the solution field in VisIt and study of the effect of mesh refinement on the numerical solution.',
  'Méthode des éléments finis, formulation variationnelle, Fortran, maillage, calcul scientifique et visualisation.': 'Finite-element method, variational formulation, Fortran, meshing, scientific computing and visualisation.',
  "Résolution numérique de l'équation de la chaleur unidimensionnelle à l'aide de différentes méthodes de discrétisation temporelle": 'Numerical solution of the one-dimensional heat equation using different time-discretisation methods',
  "Résolution par différences finies d'un problème de diffusion thermique.": 'Finite-difference solution of a heat-diffusion problem.',
  "Résoudre numériquement l'équation de la chaleur unidimensionnelle.": 'Numerically solve the one-dimensional heat equation.',
  'Implémentation de plusieurs schémas temporels : Euler explicite, Euler implicite et Crank–Nicolson.': 'Implementation of several time-stepping schemes: explicit Euler, implicit Euler and Crank–Nicolson.',
  'Comparaison de la stabilité, de la précision et du comportement numérique des différentes méthodes.': 'Comparison of the stability, accuracy and numerical behaviour of the different methods.',
  'Fortran90, différences finies, méthodes numériques, calcul scientifique.': 'Fortran90, finite differences, numerical methods and scientific computing.',
  "Résolution par différences finies de l'équation de la chaleur en 2D": 'Finite-difference solution of the 2D heat equation',
  'Extension du modèle thermique à une géométrie bidimensionnelle.': 'Extension of the thermal model to a two-dimensional geometry.',
  "Étendre la résolution numérique de l'équation de la chaleur à un domaine bidimensionnel.": 'Extend the numerical solution of the heat equation to a two-dimensional domain.',
  "Discrétisation spatiale par différences finies, implémentation numérique et analyse de l'évolution thermique.": 'Finite-difference spatial discretisation, numerical implementation and analysis of thermal evolution.',
  "Visualisation de la diffusion de la chaleur et étude de l'influence des paramètres numériques.": 'Visualisation of heat diffusion and study of the influence of numerical parameters.',
  'Fortran90, différences finies, calcul scientifique, visualisation de résultats.': 'Fortran90, finite differences, scientific computing and result visualisation.',
  'Stage ouvrier — Seagale': 'Industrial placement — Seagale',
  'Découverte du milieu industriel et des pratiques de production.': 'Introduction to the industrial environment and production practices.',
  "Découvrir le fonctionnement d'une entreprise industrielle et le rôle des différents métiers de production.": 'Understand how an industrial company operates and the roles of its various production teams.',
  "Observation du terrain, participation aux activités, échanges avec les équipes et rédaction d'un rapport de stage.": 'On-site observation, participation in activities, discussions with teams and preparation of an internship report.',
  "Meilleure compréhension de l'organisation industrielle, des contraintes de production et du travail en équipe.": 'Improved understanding of industrial organisation, production constraints and teamwork.',
  "Découverte industrielle, communication, observation, esprit d'équipe.": 'Industrial experience, communication, observation and team spirit.',
  'Étude structurelle et hydrodynamique du drone sous-marin MANTA': 'Structural and hydrodynamic study of the MANTA underwater drone',
  "Modélisation et analyse d'un drone sous-marin dans un contexte de projet étudiant.": 'Modelling and analysis of an underwater drone as part of an academic project.',
  "Participer à l'étude d'un drone sous-marin en abordant ses aspects structurels et hydrodynamiques.": 'Contribute to the study of an underwater drone, addressing its structural and hydrodynamic aspects.',
  'Travail en équipe, analyse du comportement du drone, étude de la structure et réflexion sur les contraintes liées au milieu marin.': 'Teamwork, analysis of drone behaviour, structural study and consideration of marine-environment constraints.',
  "Développement d'une approche multidisciplinaire mêlant mécanique, hydrodynamique et organisation de projet.": 'Development of a multidisciplinary approach combining mechanics, hydrodynamics and project organisation.',
  'Travail en équipe, hydrodynamique, mécanique, gestion de projet, analyse technique.': 'Teamwork, hydrodynamics, mechanics, project management and technical analysis.',
  "Résolution numérique d'équations aux dérivées partielles": 'Numerical solution of partial differential equations',
  "Étude de schémas aux différences finies appliqués à l'équation de transport.": 'Study of finite-difference schemes applied to the transport equation.',
  'Construire et analyser des méthodes numériques pour résoudre des équations aux dérivées partielles.': 'Develop and analyse numerical methods for solving partial differential equations.',
  "Discrétisation par différences finies et étude de plusieurs schémas numériques pour l'équation de transport.": 'Finite-difference discretisation and study of several numerical schemes for the transport equation.',
  'Comparaison de la consistance, de la stabilité et du comportement des solutions approchées.': 'Comparison of the consistency, stability and behaviour of approximate solutions.',
  'EDP, différences finies, équation de transport, analyse de stabilité et calcul scientifique.': 'PDEs, finite differences, transport equation, stability analysis and scientific computing.',
  "Étude des méthodes d'intégration numérique": 'Study of numerical integration methods',
  "Comparaison de plusieurs méthodes d'approximation numérique d'intégrales.": 'Comparison of several numerical methods for approximating integrals.',
  "Évaluer la précision et l'efficacité de différentes méthodes de quadrature numérique.": 'Evaluate the accuracy and efficiency of different numerical quadrature methods.',
  "Rectangles, point milieu, trapèzes, Simpson et développement d'une méthode barycentrique pondérée.": 'Rectangle, midpoint, trapezoidal and Simpson rules, and development of a weighted barycentric method.',
  'Comparaison des erreurs et de la rapidité sur plusieurs fonctions tests.': 'Comparison of error and execution speed across several test functions.',
  "MATLAB, intégration numérique, quadrature, analyse d'erreur et comparaison de méthodes.": 'MATLAB, numerical integration, quadrature, error analysis and method comparison.',
  "Résolution numérique d'équations différentielles": 'Numerical solution of differential equations',
  "Étude des schémas d'Euler explicite et implicite pour un problème de Cauchy.": 'Study of explicit and implicit Euler schemes for an initial-value problem.',
  "Approcher la solution d'une équation différentielle linéaire du premier ordre.": 'Approximate the solution of a first-order linear differential equation.',
  "Discrétisation temporelle et mise en œuvre des méthodes d'Euler explicite et implicite.": 'Time discretisation and implementation of explicit and implicit Euler methods.',
  "Analyse de la consistance, de la stabilité, de la convergence et de l'ordre des erreurs.": 'Analysis of consistency, stability, convergence and error order.',
  "Équations différentielles, problème de Cauchy, schémas d'Euler, MATLAB et analyse numérique.": 'Differential equations, initial-value problems, Euler schemes, MATLAB and numerical analysis.',
  "Étude numérique de l'interpolation": 'Numerical study of interpolation',
  'Reconstruction de fonctions par interpolation polynomiale et interpolation par morceaux.': 'Function reconstruction using polynomial and piecewise interpolation.',
  "Reconstruire une fonction à partir d'un ensemble discret de valeurs connues.": 'Reconstruct a function from a discrete set of known values.',
  'Interpolations de Lagrange et de Newton, points de Tchebychev, interpolation affine et fonctions splines.': 'Lagrange and Newton interpolation, Chebyshev nodes, linear interpolation and spline functions.',
  "Mise en évidence du phénomène de Runge et comparaison de l'erreur selon le choix des points.": 'Demonstration of the Runge phenomenon and comparison of error according to node selection.',
  "Interpolation polynomiale, splines, phénomène de Runge, MATLAB et analyse d'erreur.": 'Polynomial interpolation, splines, Runge phenomenon, MATLAB and error analysis.',
  'TIPE — Le Halo en Formule 1': 'TIPE — The Halo in Formula 1',
  'Étude des choix de conception du halo de Formule 1 et de son rôle dans la protection du pilote.': 'Study of Formula 1 halo design choices and its role in driver protection.',
  'Comment justifier les choix de conception du halo en Formule 1 ?': 'How can the design choices of the Formula 1 halo be justified?',
  'Présentation du dispositif, modélisations, expériences et comparaison des résultats obtenus.': 'Presentation of the device, modelling, experiments and comparison of the results.',
  'Comprendre comment la conception du halo contribue à améliorer la sécurité du pilote dans la monoplace.': 'Understand how the halo design helps improve driver safety in a single-seater.',
  'Création du site internet AerOptAI': 'Creation of the AerOptAI website',
  'Interface de visualisation et de présentation de résultats de simulations numériques.': 'Interface for visualising and presenting numerical-simulation results.',
  'Consulter le site AerOptAI': 'Visit the AerOptAI website',
  'Portfolio personnel': 'Personal portfolio',
  'Création de ce site portfolio pour présenter mon parcours, mes projets et mes compétences.': 'Creation of this portfolio website to present my background, projects and skills.',
  'Voir le portfolio': 'View the portfolio',
  'Brevet d’Initiation Aéronautique (BIA)': 'Aeronautical Initiation Certificate (BIA)',
  'Les diplômes et certifications obtenus au cours de mon parcours scolaire et personnel.': 'Degrees and certifications earned throughout my academic and personal journey.',
  'Diplôme validant des connaissances générales dans le domaine de l’aéronautique.': 'Certificate validating general knowledge in the field of aeronautics.',
  'Baccalauréat': 'French Baccalaureate',
  'Obtention du baccalauréat avant mon entrée en classe préparatoire scientifique.': 'Awarded the French Baccalaureate before entering a scientific preparatory programme.',
  'Consulter le diplôme': 'View certificate',
  'Téléphone :': 'Phone:',
  'Email :': 'Email:',
  'LinkedIn :': 'LinkedIn:',
  'GitHub :': 'GitHub:',
  'Localisation :': 'Location:',
  'Profil LinkedIn': 'LinkedIn profile',
  'Profil GitHub': 'GitHub profile',
  'Envoyer un email': 'Send an email',
  'Consulter mon CV': 'View my résumé',
  'Juillet 2020': 'July 2020',
  'Juillet 2022': 'July 2022',
  '23 août 2026': '23 August 2026',
  '29 avril 2026': '29 April 2026',
  '27 mars 2026': '27 March 2026',
  '20 décembre 2025': '20 December 2025',
  '10 novembre 2025': '10 November 2025',
  '13 octobre 2025': '13 October 2025',
  '18 août 2025': '18 August 2025',
  '13 juin 2025': '13 June 2025',
  '10 juin 2025': '10 June 2025',
  '27 mai 2025': '27 May 2025',
  '23 avril 2025': '23 April 2025',
  '10 avril 2025': '10 April 2025',
  '2 juillet 2024': '2 July 2024',
  'Aujourd’hui': 'Today',
  'Voir le projet': 'View project',
  'Brevet d’Initiation Aéronautique': 'Aeronautical Initiation Certificate',
  '2de / 1re / Tle scientifique': 'Years 10–12 – Science track',
  'Janv. 2020 – juin 2022': 'Jan. 2020 – June 2022',
  'Lycée – parcours scientifique': 'High school – Science track',
  'Trois années de lycée dans un parcours scientifique, jusqu’à l’obtention du baccalauréat.': 'Three years of high school following a science-focused curriculum, leading to the French Baccalaureate.',
  'Lycée': 'High school',
  'Sciences': 'Science',
  'Obtention du BIA, validant des connaissances générales dans le domaine de l’aéronautique.': 'Awarded the BIA, validating general knowledge in aeronautics.',
  'Diplôme': 'Degree',
  'Aéronautique': 'Aeronautics',
  'Obtention du baccalauréat': 'Awarded the French Baccalaureate',
  'Obtention du baccalauréat et début de mon parcours dans l’enseignement supérieur scientifique.': 'Awarded the French Baccalaureate and began my scientific higher-education studies.',
  'Classe préparatoire': 'Preparatory programme',
  'Classe préparatoire PCSI – PSI': 'PCSI–PSI preparatory programme',
  'Deux années de classe préparatoire durant lesquelles j’ai développé de solides bases en mathématiques, physique, mécanique et sciences de l’ingénieur.': 'Two years of intensive preparatory studies in which I built strong foundations in mathematics, physics, mechanics and engineering science.',
  'Mathématiques': 'Mathematics',
  'Physique': 'Physics',
  'Mécanique': 'Mechanics',
  'Sciences de l’ingénieur': 'Engineering science',
  'Méthodes de travail': 'Working methods',
  'Cycle ingénieur': 'Engineering programme',
  'Cycle ingénieur SeaTech': 'SeaTech engineering programme',
  'Formation d’ingénieur en mécanique, modélisation, calcul scientifique et simulation numérique à SeaTech – Université de Toulon.': 'Engineering programme in mechanics, modelling, scientific computing and numerical simulation at SeaTech – University of Toulon.',
  'Calcul scientifique': 'Scientific computing',
  'Programmation': 'Programming',
  'Stage SEAGALE': 'SEAGALE placement',
  'Stage chez SEAGALE': 'Placement at SEAGALE',
  'Première expérience en milieu industriel, avec une découverte du fonctionnement de l’entreprise, des méthodes de production et du travail en équipe.': 'First experience in an industrial environment, learning about company operations, production methods and teamwork.',
  'Environnement industriel': 'Industrial environment',
  'Production': 'Production',
  'Organisation': 'Organisation',
  'TIPE Halo F1': 'F1 Halo TIPE',
  'TIPE — Le Halo en Formule 1': 'TIPE — The Formula 1 Halo',
  'Étude des choix de conception du halo et de son rôle dans la protection du pilote.': 'Study of the halo’s design choices and its role in protecting the driver.',
  'Modélisation': 'Modelling',
  'Étude numérique de l’interpolation': 'Numerical study of interpolation',
  'Interpolation polynomiale, points de Tchebychev et fonctions splines.': 'Polynomial interpolation, Chebyshev nodes and spline functions.',
  'Équations différentielles': 'Differential equations',
  'Résolution numérique d’équations différentielles': 'Numerical solution of differential equations',
  'Étude des schémas d’Euler explicite et implicite pour un problème de Cauchy.': 'Study of explicit and implicit Euler schemes for an initial-value problem.',
  'Euler': 'Euler methods',
  'Intégration numérique': 'Numerical integration',
  'Étude des méthodes d’intégration numérique': 'Study of numerical integration methods',
  'Comparaison de plusieurs méthodes de quadrature numérique.': 'Comparison of several numerical quadrature methods.',
  'Quadrature': 'Quadrature',
  'Analyse d’erreur': 'Error analysis',
  'Équation de transport': 'Transport equation',
  'Résolution numérique d’équations aux dérivées partielles': 'Numerical solution of partial differential equations',
  'Étude de schémas aux différences finies appliqués à l’équation de transport.': 'Study of finite-difference schemes applied to the transport equation.',
  'Différences finies': 'Finite differences',
  'Stabilité': 'Stability',
  'Projet MANTA': 'MANTA project',
  'Étude du drone sous-marin MANTA': 'Study of the MANTA underwater drone',
  'Étude structurelle et hydrodynamique d’un drone sous-marin.': 'Structural and hydrodynamic study of an underwater drone.',
  'Hydrodynamique': 'Hydrodynamics',
  'Structure': 'Structures',
  'Rapport SEAGALE': 'SEAGALE report',
  'Stage ouvrier chez SEAGALE': 'Industrial placement at SEAGALE',
  'Rapport consacré à la découverte du milieu industriel et des pratiques de production.': 'Report on learning about the industrial environment and production practices.',
  'Stage': 'Placement',
  'Industrie': 'Industry',
  'Chaleur 2D': '2D heat equation',
  'Équation de la chaleur en 2D': '2D heat equation',
  'Résolution par différences finies de l’équation de la chaleur en deux dimensions.': 'Finite-difference solution of the two-dimensional heat equation.',
  'Chaleur 1D': '1D heat equation',
  'Résolution numérique de l’équation de la chaleur unidimensionnelle': 'Numerical solution of the one-dimensional heat equation',
  'Comparaison de schémas numériques pour un problème de diffusion thermique.': 'Comparison of numerical schemes for a heat-diffusion problem.',
  'Problème elliptique': 'Elliptic problem',
  'Problème elliptique 2D par éléments finis': '2D elliptic problem using finite elements',
  'Résolution de l’équation de Laplace par la méthode des éléments finis.': 'Solution of the Laplace equation using the finite-element method.',
  'Éléments finis': 'Finite elements',
  'Simulation CFD d’un profil NACA 4412': 'CFD simulation of a NACA 4412 airfoil',
  'Amortisseur': 'Shock absorber',
  'Amortisseur de choc à lames': 'Leaf-spring shock absorber',
  'Modélisation et analyse numérique d’un système mécanique avec le logiciel Abaqus.': 'Modelling and numerical analysis of a mechanical system using Abaqus.',
  'Impact d’un profil évolutif sur l’aile LS-0417': 'Impact of a morphing profile on the LS-0417 airfoil',
  'Simulations CFD 2D et 3D sous OpenFOAM, puis validation expérimentale en soufflerie.': '2D and 3D CFD simulations in OpenFOAM, followed by experimental wind-tunnel validation.',
  'Stage à Prague': 'Placement in Prague',
  'Stage à Prague – CTU': 'Placement in Prague – CTU',
  'Stage académique au Czech Technical University in Prague consacré à la simulation numérique et à la caractérisation aérodynamique de profils d’ailes.': 'Academic placement at Czech Technical University in Prague focused on numerical simulation and aerodynamic characterisation of airfoils.',
  'Simulations CFD sous OpenFOAM': 'CFD simulations in OpenFOAM',
  'Étude du profil LS-0417': 'Study of the LS-0417 airfoil',
  'Analyse des coefficients aérodynamiques': 'Analysis of aerodynamic coefficients',
  'Outils Python de post-traitement': 'Python post-processing tools',
  'Comparaison de configurations de profils évolutifs': 'Comparison of morphing-profile configurations',
  'Diplôme d’ingénieur': 'Engineering degree',
  'Diplôme d’ingénieur SeaTech': 'SeaTech engineering degree',
  'Obtention prévue du diplôme d’ingénieur de SeaTech, avec une spécialisation en mécanique, modélisation et simulation numérique.': 'Expected completion of the SeaTech engineering degree, specialising in mechanics, modelling and numerical simulation.',
  'Objectif futur': 'Future milestone',
  'Sept. 2022 – juin 2024': 'Sept. 2022 – June 2024',
  'Sept. 2024 – sept. 2027': 'Sept. 2024 – Sept. 2027',
  'Juin – juillet 2025': 'June – July 2025',
  'Mai – août 2026': 'May – August 2026',
  'Septembre 2027': 'September 2027'
}));

const attributeTranslations = {
  'Ouvrir le menu': 'Open menu',
  'Navigation principale': 'Main navigation',
  'Photo de profil de Thomas DE GUZMAN': 'Profile photo of Thomas DE GUZMAN',
  'Frise chronologique de 2020 à 2028': 'Timeline from 2020 to 2028',
  'Retour en haut': 'Back to top',
  'Fermer les détails': 'Close details'
};

const originalText = new WeakMap();
const originalAttributes = new WeakMap();

const sectionTranslations = {
  'academic-projects-intro': {
    fr: 'Cette section rassemble les principaux projets réalisés au cours de ma formation d’ingénieur. Ils portent sur la simulation numérique, la mécanique des fluides, les méthodes numériques et le calcul scientifique.',
    en: 'This section presents the main projects completed during my engineering studies. They cover numerical simulation, fluid mechanics, numerical methods and scientific computing.'
  },
  'personal-projects-intro': {
    fr: 'Cette section regroupe mes projets personnels autour du développement web, de l’intelligence artificielle, de l’automatisation et de la visualisation de données.',
    en: 'This section presents my personal projects in web development, artificial intelligence, automation and data visualisation.'
  }
};

function translateTextNodes(language) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let node;
  while ((node = walker.nextNode())) {
    if (!node.parentElement || ['SCRIPT', 'STYLE'].includes(node.parentElement.tagName)) continue;
    if (!originalText.has(node)) originalText.set(node, node.nodeValue);
    const source = originalText.get(node);
    if (language === 'fr') {
      node.nodeValue = source;
      continue;
    }
    const normalized = source.replace(/\s+/g, ' ').trim();
    const translated = translations.get(normalized);
    if (translated) {
      const leadingWhitespace = source.match(/^\s*/)?.[0] || '';
      const trailingWhitespace = source.match(/\s*$/)?.[0] || '';
      node.nodeValue = `${leadingWhitespace}${translated}${trailingWhitespace}`;
    }
  }
}

function translateAttributes(language) {
  document.querySelectorAll('[aria-label], img[alt]').forEach((element) => {
    if (!originalAttributes.has(element)) {
      originalAttributes.set(element, {
        ariaLabel: element.getAttribute('aria-label'),
        alt: element.getAttribute('alt')
      });
    }
    const originals = originalAttributes.get(element);
    ['ariaLabel', 'alt'].forEach((key) => {
      const attribute = key === 'ariaLabel' ? 'aria-label' : 'alt';
      const source = originals[key];
      if (source === null) return;
      if (language === 'fr') element.setAttribute(attribute, source);
      else {
        let translated = attributeTranslations[source] || source;
        [...translations.entries()]
          .sort(([a], [b]) => b.length - a.length)
          .forEach(([french, english]) => {
            translated = translated.split(french).join(english);
          });
        translated = translated
          .replace('Illustration de ', 'Illustration of ')
          .replace('Afficher les détails', 'Show details')
          .replace('Aller au projet', 'Go to project');
        element.setAttribute(attribute, translated);
      }
    });
  });
}

function setLanguage(language) {
  const selected = language === 'en' ? 'en' : 'fr';
  document.documentElement.lang = selected;
  document.querySelector('meta[name="description"]').content = selected === 'en'
    ? 'Portfolio of Thomas DE GUZMAN, engineering student specialising in fluid mechanics, CFD and numerical simulation.'
    : 'Portfolio personnel de Thomas DE GUZMAN, étudiant ingénieur en mécanique des fluides, CFD et simulation numérique.';
  document.querySelectorAll('[data-i18n-section]').forEach((element) => {
    const content = sectionTranslations[element.dataset.i18nSection];
    if (content) element.textContent = content[selected];
  });
  translateTextNodes(selected);
  translateAttributes(selected);
  document.querySelectorAll('[data-language-option]').forEach((option) => {
    option.classList.toggle('is-active', option.dataset.languageOption === selected);
  });
  const toggle = document.querySelector('.language-toggle');
  toggle?.setAttribute('aria-pressed', String(selected === 'en'));
  toggle?.setAttribute('aria-label', selected === 'fr' ? 'Passer le site en anglais' : 'Switch website to French');
  localStorage.setItem('portfolio-language', selected);
}

const languageToggle = document.querySelector('.language-toggle');
languageToggle?.addEventListener('click', () => setLanguage(document.documentElement.lang === 'fr' ? 'en' : 'fr'));

const preferredLanguage = localStorage.getItem('portfolio-language');
setLanguage(preferredLanguage === 'en' ? 'en' : 'fr');

// Timeline details are created on demand. Translate newly inserted content as well.
const translationObserver = new MutationObserver((mutations) => {
  if (document.documentElement.lang !== 'en') return;
  if (mutations.some((mutation) => mutation.addedNodes.length)) {
    translateTextNodes('en');
    translateAttributes('en');
  }
});
translationObserver.observe(document.body, { childList: true, subtree: true });
