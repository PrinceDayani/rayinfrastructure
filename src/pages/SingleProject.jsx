import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../styles/SingleProject.css';


// Directly embedded project data
const projectsData = {
  "WaterSupply": {
    "Water and Sanitation Management Organisation": {
      title: "Water and Sanitation Management Organisation",
      client: "Gujarat State",
      location: "Gujarat, India",
      completed: "31 December 2023",
      description: [
        "The project involves comprehensive preparation, monitoring, supervision, and surveillance of an in-village water supply scheme in Gujarat. It was implemented to enhance water accessibility and improve sanitation standards in rural areas.",
        "The project required the development of advanced water infrastructure, including reservoirs, pipelines, and treatment facilities. It also incorporated innovative approaches to construction and environmental sustainability."
      ],
      keyPoints: [
        "Conducted extensive surveys to understand water resource availability",
        "Supervised and monitored the construction of water distribution systems",
        "Ensured high-quality standards through regular inspections",
        "Promoted community awareness for water conservation",
        "Delivered functional water supply systems meeting safety benchmarks"
      ],
      image: "https://via.placeholder.com/900x600"
    },
    "Construction of Overhead Tank": {
      title: "Consultancy Services for Construction of Overhead Tank",
      client: "Vadodara Municipal Corporation ",
      location: "Vadodara, India",
      completed: "18 August 2021",
      description: [
        "The project entails consultancy services for the comprehensive planning, design, and execution of critical infrastructure required for urban water management in Vadodara. This includes the construction of overhead water tanks, transformer rooms, pump houses, feeder lines, and the implementation of electrical and mechanical systems. Additionally, the project involves the installation of advanced pumping machinery and an efficient water distribution network, along with a five-year operation and maintenance plan to ensure sustainability. The project spans across the areas of Bil, Bhayli, Sevasi, Undera, Karodiya, Vemali, and Vadadala, under the jurisdiction of the Vadodara Municipal Corporation.",
        "The construction phase focuses on delivering high-quality infrastructure tailored to meet the growing water supply demands of the Vadodara region. Each overhead tank and associated structure is engineered to ensure durability, structural integrity, and adherence to local regulations. The construction process incorporates the latest materials and technologies to enhance the efficiency of water storage and distribution. By integrating modern electrical and mechanical systems within the pump houses, the project aims to optimize energy consumption and provide reliable performance. The feeder lines and distribution networks are meticulously designed to ensure even water distribution across all designated areas."
      ],
      keyPoints: [
        "Prepared and finalized a Detailed Project Report (DPR) to outline the scope, objectives, and methodology for the project.",
        "Developed and issued tender documents, ensuring transparent and competitive bidding processes.",
        "Facilitated the commencement of execution work, with ongoing progress across multiple project sites.",
        "Coordinated with multiple stakeholders to streamline planning and implementation phases.",
        "Implemented robust project management practices to maintain timelines and ensure quality control."
      ],
      image: "https://via.placeholder.com/900x600"
    },

    
    "Construction Supervision Consultancy (CSC) Services": {
      title: "Construction Supervision Consultancy (CSC) Services",
      client: "Gujarat Water Infrastructure Ltd.",
      location: "Gandhinagar, India",
      completed: "31 March 2012",
      description: [
        "The project involves providing Construction Supervision Consultancy (CSC) services for a pumped water supply scheme covering the Kesariya to Sonaria region under the jurisdiction of Gujarat Water Infrastructure Ltd., Gandhinagar. This project focuses on developing a sustainable and efficient water supply system to meet the demands of the region. The scheme encompasses the planning, execution, and supervision of various components, including pump stations, transmission pipelines, and associated infrastructure, ensuring compliance with quality standards and timelines.",
        "The scope includes end-to-end consultancy services aimed at ensuring successful implementation of the water supply scheme. From initial planning to execution monitoring, the consultancy services ensure that each component, including the pumped water systems, meets the highest standards of efficiency and reliability. The project also incorporates advanced water transmission technologies to minimize losses and optimize flow."      ],
      keyPoints: [
        "Conducted detailed planning and provided technical assistance throughout the project lifecycle.",
        "Supervised the construction of pump stations and the installation of transmission pipelines.",
        "Monitored quality control and ensured adherence to engineering standards and specifications.",
        "Coordinated with contractors and stakeholders to resolve on-site challenges promptly.",
        "Ensured timely completion of the project phases while maintaining a focus on operational efficiency and sustainability."
      ],
      image: "https://via.placeholder.com/900x600"
    },

    "35 MGD Water Supply Project": {
      title: "Consultancy Services for 35 MGD Water Supply Project",
      client: "GIDC Vilayat & Dahej Estate Gujarat Industrial Development Corporation",
      location: "Bharuch, Gujarat, India",
      completed: "05 September 2008",
      description: [
        "This project involves providing consultancy services for the development of a 35 Million Gallons per Day (MGD) water supply system to cater to the industrial water demands of GIDC Vilayat and Dahej Estate in Bharuch. The project is designed to support the rapidly growing industrial estates by ensuring a reliable and sufficient supply of water. It includes planning, execution, and supervision of water intake systems, treatment plants, transmission pipelines, and associated infrastructure, enabling seamless integration with the industrial requirements of the region.",
        "The consultancy services encompass comprehensive planning, engineering design, and project management to ensure the successful completion of the water supply project. The scope includes assessing the water requirements of the estates, optimizing water treatment processes, and developing a robust transmission network. With a focus on sustainability, the project integrates modern technologies to enhance efficiency and reduce operational costs, ensuring long-term benefits for the industrial estates."
      ],
      keyPoints: [
      "Conducted detailed feasibility studies and demand assessments for the project area.",
      "Developed and finalized the design for the water intake systems, treatment plants, and pipelines.",
      "Supervised the construction and installation processes to ensure adherence to engineering standards.",
      "Coordinated with GIDC and stakeholders to address project-specific challenges and requirements.",
      "Delivered the project on schedule, enabling the seamless operation of a 35 MGD water supply system for the estates."
    ],
      image: "https://via.placeholder.com/900x600"
    },

    "Third Party Inspection": {
      title: "Third Party Inspection for the Work",
      client: "Gujarat Industrial Development Corporation",
      location: "Bharuch, Gujarat, India",
      completed: "15 June 2007",
      description: [
      "The project involves Third Party Inspection (TPI) services for critical water supply infrastructure works under Gujarat Industrial Development Corporation (GIDC), Bharuch. The scope includes:",
      "1. Inspection and quality assurance for providing and laying a 1200 mm diameter GRP (Glass Reinforced Plastic) water supply pipeline from the Angareshwar intake well at Bhersam.",
      "2. Inspection and quality assurance for providing and laying 1000 mm and 800 mm diameter GRP water supply pipelines from Bhersam to GIDC Compound and further to GIDC-Dahej.",
      "These pipelines form a vital part of the water supply infrastructure, ensuring the delivery of reliable water resources to industrial zones.",
      "The Third Party Inspection services focus on ensuring compliance with technical specifications, material quality, and execution standards during the pipeline construction. The inspection encompasses material testing, on-site quality checks, alignment verification, and hydraulic performance testing. The goal is to ensure that the pipelines meet industry standards and function seamlessly for the intended lifespan, supporting industrial growth in the region."
    ],

      keyPoints: [
      "Conducted material inspections to ensure the GRP pipelines adhered to quality and durability standards.",
      "Monitored the laying and jointing process of the pipelines to verify proper alignment and construction practices.",
      "Performed on-site testing and inspections, including pressure and leakage tests, to validate hydraulic performance.",
      "Ensured strict compliance with technical specifications and project timelines.",
      "Delivered comprehensive inspection reports, providing actionable insights for maintaining the integrity of the pipeline network."
      ],
      image: "https://via.placeholder.com/900x600"
    },
  },

  
  "ExperienceCertificate-Drainage": {
    "CSC-TPI Service": {
    title: "CSC-TPI Service",
    client: "GWSSB",
    location: "Bhavnagar, Gujarat, India",
    completed: "03 September 2015",
    description: [
        "The project involves providing Construction Supervision Consultancy (CSC) and Third Party Inspection (TPI) services for a Design and Build contract concerning the construction of an underground sewer collecting system in Shihor, Bhavnagar. The scope includes the construction of a comprehensive sewerage network, house connection systems, rising mains, pumping stations, and associated electromechanical works. The pumping stations are equipped with screen chambers and panel rooms for efficient operations, alongside jetting machinery with suction facilities. Additionally, wire fencing is provided for the security of all pumping stations. The project also covers 24 months of operation and maintenance (O&M) services to ensure smooth and reliable functioning of the system.",
        "The project involves providing Construction Supervision Consultancy (CSC) and Third Party Inspection (TPI) services for a Design and Build contract concerning the construction of an underground sewer collecting system in Shihor, Bhavnagar. The scope includes the construction of a comprehensive sewerage network, house connection systems, rising mains, pumping stations, and associated electromechanical works. The pumping stations are equipped with screen chambers and panel rooms for efficient operations, alongside jetting machinery with suction facilities. Additionally, wire fencing is provided for the security of all pumping stations. The project also covers 24 months of operation and maintenance (O&M) services to ensure smooth and reliable functioning of the system."
    ],
    keyPoints: [
        "Supervised the construction of the sewer collecting system and house connection network, ensuring all work was executed per design and specifications.",
        "Monitored the installation and commissioning of rising mains and pumping stations with screen chambers and panel rooms.",
        "Verified the installation and functionality of jetting machinery with suction facilities and ensured their compliance with operational standards.",
        "Conducted third-party inspections for the electromechanical works and wiring systems, ensuring proper execution.",
        "Coordinated with contractors to ensure timely completion of the project while maintaining the highest standards of quality and safety.",
        "Provided continuous oversight during the 24-month O&M phase to ensure long-term system reliability."
    ],
    image: "https://via.placeholder.com/900x600"
    },

    "PMC for Construction": {
    title: "PMC for Construction",
    client: "Jamnagar Municipal Corporation",
    location: "Jamnagar, Gujarat, India",
    completed: "20 January 2017",
    description: [
        "The project involves providing Project Management Consultancy (PMC) services for the construction of an underground sewer collection system and house connection network for the Jamnagar Underground Sewerage Project in Zone N-1, under the SJMMSVY Scheme. The project aims to enhance the city’s sewerage infrastructure to ensure efficient waste management and improve public health. The scope includes planning, designing, and overseeing the construction of the sewer system, installation of house connections, and ensuring the proper functioning of all related infrastructure, with a focus on sustainability and compliance with local standards.",
        "The consultancy services focus on the effective management and supervision of the construction work for the underground sewer collection system and house connection network. This includes coordinating with contractors, overseeing construction progress, ensuring adherence to technical specifications, managing project timelines, and conducting quality control checks. The project is designed to ensure a reliable and efficient sewerage network that serves the growing population of Jamnagar, promoting long-term environmental and public health benefits."
    ],
    keyPoints: [
        "Provided overall project management, ensuring the proper execution of the underground sewer collection system and house connection network.",
        "Coordinated with all stakeholders to maintain smooth workflow and resolve any on-site challenges.",
        "Monitored and ensured compliance with technical specifications and quality standards for all components of the sewerage system.",
        "Reviewed and approved design plans and construction schedules to maintain project timelines.",
        "Ensured regular inspections and reporting to track progress and address potential delays.",
        "Supported the implementation of the SJMMSVY scheme, ensuring the project’s alignment with government objectives for urban sanitation."
    ],
    image: "https://via.placeholder.com/900x600"
},

  "TPI Services": {
    title: "TPI Services",
    client: "Junagadh Municipal Corporation",
    location: "Junagadh, Gujarat, India",
    completed: "04 October 2022",
    description: [
        "The project involves Third Party Inspection (TPI) services for the providing, supplying, lowering, laying, and jointing of Reinforced Cement Concrete (R.C.C.) pipes for the sewer collecting system, along with the installation of stoneware pipes for house connection chambers in Zones 8 & 9 of Junagadh Town. Additionally, the scope includes the construction of house connection chambers, installation of sewer cleaning equipment, and all other ancillary works required for the project. This also covers the testing and commissioning of all systems, followed by 2 years of post-completion operation and maintenance (O&M) services to ensure optimal performance of the sewerage network.",
        "The consultancy services focus on providing third-party inspection to ensure compliance with technical specifications during the construction and installation of the sewerage system. This includes verifying the quality and installation of R.C.C. pipes and stoneware pipes, checking the construction of house connection chambers, and ensuring the installation of sewer cleaning equipment is done correctly. The scope also includes overseeing the commissioning process to verify that all systems are operational before the handover, with post-completion O&M services ensuring that the system functions smoothly for two years after project completion."
    ],
    keyPoints: [
        "Provided third-party inspections during the installation of R.C.C. and stoneware pipes, ensuring all work met the required standards.",
        "Monitored the construction and installation of house connection chambers and sewer cleaning equipment.",
        "Verified the quality of materials and workmanship to ensure compliance with the technical specifications.",
        "Supervised the testing and commissioning of the entire sewerage system, ensuring all components functioned as intended.",
        "Ensured the implementation of a comprehensive post-completion O&M plan, guaranteeing the smooth operation of the sewerage system for two years."
    ],
    image: "https://via.placeholder.com/900x600"
},
  },
"SewageTreatmentPlant": {
    "Drainage Gravity Line": {
    title: "Drainage Gravity Line",
    client: "Vadodara Municipal Corporation",
    location: "Vadodara, Gujarat, India",
    completed: "16 June 2016",
    description: [
        "The project involves the work of providing and laying a drainage gravity line using the trenchless pipe-pushing method, along with designing, constructing, testing, and commissioning a sewage pumping station and delivery pressure line in the Karelibaug area, Ward No. 8, of Vadodara. The scope includes constructing a sewage system capable of handling 8.56 Million Liters per Day (MLD) to meet the growing demand for wastewater management in the area. This project aims to enhance the city’s sewage infrastructure with minimal disruption to the surrounding environment by utilizing trenchless technology for pipe installation.",
        "The scope of work includes the provision and laying of the drainage gravity line using trenchless technology to minimize excavation and disturbance. It also involves designing and constructing the sewage pumping station, including the installation of a delivery pressure line to ensure efficient wastewater transfer. The project further encompasses comprehensive testing and commissioning to ensure all systems are fully operational and meet required standards. The overall goal is to improve the sewage collection and treatment infrastructure for Karelibaug area, contributing to a cleaner and more efficient urban environment."
    ],
    keyPoints: [
        "Supervised the installation of the drainage gravity line using trenchless pipe-pushing technology, ensuring minimal environmental impact.",
        "Designed and constructed the sewage pumping station and delivery pressure line with a capacity to handle 8.56 MLD.",
        "Conducted thorough testing and commissioning of all systems to verify operational efficiency and performance.",
        "Ensured all project components met the required technical specifications and adhered to industry standards.",
        "Provided ongoing support during the operational phase to ensure smooth functionality of the sewage system."
    ],
    image: "https://via.placeholder.com/900x600"
},
"TPI Services for Sewage Pumping Station": {
    title: "TPI Services for Sewage Pumping Station",
    client: "Junagadh Municipal Corporation",
    location: "Junagadh, Gujarat, India",
    completed: "29 September 2021",
    description: [
        "The project involves providing Third Party Inspection (TPI) services for the construction of a sewage pumping station and an 8.20 MLD Sewage Treatment Plant (STP) at Zones 8 & 9 in Junagadh City, under the AMRUT Scheme. The scope includes overseeing the construction of the pumping station and STP, ensuring all systems are designed, installed, and tested according to the specifications required by the project. The aim is to improve wastewater management in Junagadh by providing an efficient sewage treatment and pumping system to support urban sanitation.",
        "The TPI services focus on ensuring the quality and compliance of the construction works for the sewage pumping station and STP. This involves verifying the materials used, assessing the quality of construction practices, conducting periodic inspections, and ensuring that the equipment and systems are tested and commissioned properly. The project also includes verifying the operational efficiency of the pumping station and STP, ensuring that both systems meet the required standards and performance levels."
    ],
    keyPoints: [
        "Provided third-party inspections during the construction of the sewage pumping station and STP, ensuring compliance with project specifications.",
        "Monitored the installation of systems, including pumps and treatment equipment, to ensure proper functionality.",
        "Conducted quality checks on materials and construction practices to meet industry standards.",
        "Verified the commissioning process to ensure the sewage treatment plant and pumping station were fully operational.",
        "Supported the project team in maintaining schedule adherence while ensuring the highest quality of work throughout the project."
    ],
    image: "https://via.placeholder.com/900x600"
},
"Sewerage Pumping Station": {
    title: "Sewerage Pumping Station",
    client: "Vadodara Maha Nagar Seva Sadan",
    location: "Vadodara, Gujarat, India",
    completed: "Not Specified",
    description: [
        "The project involves the designing, constructing, testing, and commissioning of a sewerage pumping station, including its pressure line and gravity connection at Bakarwadi in Ward No. 5 of Vadodara. The scope includes the development of a sewerage system with a treatment capacity of 32.50 MLD to handle the wastewater requirements of the area. This project aims to improve Vadodara's sanitation infrastructure by ensuring efficient wastewater management and treatment to support the growing urban population.",
        "The scope of work includes the design and construction of the sewerage pumping station, along with the installation of the pressure line and gravity connection. The design ensures that the pumping station is capable of handling a capacity of 32.50 MLD, while the pressure line and gravity connection facilitate the seamless transfer of wastewater to treatment facilities. Testing and commissioning are integral to ensuring that all components meet the required operational standards before the system is handed over for public use."
    ],
    keyPoints: [
        "Designed and constructed the sewerage pumping station with a capacity of 32.50 MLD.",
        "Supervised the installation of the pressure line and gravity connection to ensure the efficient transfer of wastewater.",
        "Ensured the system's compliance with technical specifications and quality standards.",
        "Conducted thorough testing and commissioning to verify the operational efficiency of the pumping station.",
        "Supported the project team to ensure timely completion and seamless functioning of the sewerage system."
    ],
    image: "https://via.placeholder.com/900x600"
},
},

"StormWater": {
  "Project Management Consultancy": {
    title: "Project Management Consultancy for Stormwater Drain Channel",
    client: "Vadodara Municipal Corporation",
    location: "Vadodara, Gujarat, India",
    completed: "In Progress",
    description: [
        "The project involves providing Project Management Consultancy (PMC) services for the preparation of the Detailed Project Report (DPR), tender documentation, tender process execution, and supervision for the construction of a new stormwater drain channel. The drain will run parallel to the National Highway from Panjarapole, Ajwa Junction to Jambuva River in Vadodara. The purpose of this project is to enhance the city’s stormwater management system by ensuring efficient drainage and flood control along a major traffic corridor.",
        "The PMC services focus on overseeing the entire process, starting with the preparation of the DPR, which outlines the technical and financial aspects of the project. The consultancy also involves preparing detailed tender documents, managing the tendering process, and supervising the construction work. The goal is to ensure that the stormwater drain channel is constructed efficiently, meeting the required standards and specifications. Additionally, phase-wise execution will be closely monitored to ensure the project progresses on time and within budget."
    ],
    keyPoints: [
        "Prepared the Detailed Project Report (DPR) for the construction of the stormwater drain channel.",
        "Developed comprehensive tender documents and executed the tendering process.",
        "Provided supervision during the construction phase to ensure quality and adherence to design specifications.",
        "Ensured the timely execution of the project through phase-wise monitoring and reporting.",
        "Worked closely with contractors and stakeholders to ensure smooth project execution and problem resolution."
    ],
    image: "https://via.placeholder.com/900x600"
},
"Third Party Quality Assurance": {
    title: "Third Party Quality Assurance for Stormwater Drains",
    client: "Gujarat Industrial Development Corporation",
    location: "GIDC Jhagadia, Gujarat, India",
    completed: "30 June 2023",
    description: [
        "The project involves providing Third Party Quality Assurance (TPQA) services for the upgradation of existing kachcha/pukka stormwater or natural drains in the southern part of the Notified Area Authority, GIDC Jhagadia. The scope includes improving the stormwater drainage system to enhance its capacity and efficiency. Additionally, the project includes a 5-year free maintenance guarantee period to ensure that the upgraded system operates effectively over time.",
        "The TPQA services focus on ensuring that all construction and upgradation work of the stormwater drains is done in compliance with the technical specifications and quality standards. This involves verifying the materials used, inspecting the workmanship, and conducting regular checks throughout the construction process. The project also includes ensuring the installation of the drainage system with a 5-year maintenance guarantee to monitor its long-term performance and address any issues during the warranty period."
    ],
    keyPoints: [
        "Provided third-party quality assurance services to ensure all stormwater drain upgradation work adhered to the required quality standards.",
        "Monitored the use of materials and construction techniques to verify compliance with project specifications.",
        "Conducted regular inspections and tests to ensure that all systems were built to last and function efficiently.",
        "Ensured the installation of the stormwater drainage system was completed with a 5-year maintenance guarantee, ensuring its continued reliability.",
        "Collaborated with the project team to address any construction issues promptly and maintain project timelines."
    ],
    image: "https://via.placeholder.com/900x600"
},
"TPQA Work for Construction of Drainage Collection Network": {
    title: "TPQA for Construction of Drainage Collection Network",
    client: "Gujarat Industrial Development Corporation",
    location: "Naroda Industrial Estate, Gujarat, India",
    completed: "31 January 2023",
    description: [
        "The project involves providing Third Party Quality Assurance (TPQA) services for the construction of the drainage collection network at Naroda Industrial Estate, under the Gujarat Industrial Development Corporation (GIDC). The scope of work includes ensuring the efficient design, construction, and installation of a robust drainage system to support the industrial activities in the area. The focus is on maintaining high standards of quality and performance throughout the project.",
        "The TPQA services are aimed at ensuring that all aspects of the drainage collection network construction are executed according to the approved specifications and standards. This includes reviewing construction plans, inspecting the quality of materials used, monitoring the construction process, and ensuring compliance with safety regulations. The project also involves performing inspections and testing throughout the construction phase to guarantee that the drainage system will function effectively and meet long-term operational requirements."
    ],
    keyPoints: [
        "Provided third-party quality assurance services during the construction of the drainage collection network.",
        "Monitored the quality of materials and construction methods to ensure compliance with project specifications.",
        "Conducted regular inspections and testing to verify that the drainage network was being constructed to the highest standards.",
        "Worked closely with contractors and engineers to resolve any issues that arose during the construction phase.",
        "Ensured the completed drainage network would meet the operational needs of the Naroda Industrial Estate."
    ],
    image: "https://via.placeholder.com/900x600"
},
},

"LakeWork": {

    "TPI Services for Construction Work": {
      "title": "Third Party Inspection Services for Chipwad Lake Construction Work",
      "client": "Padra Nagarpalika",
      "location": "Padra, Gujarat, India",
      "completed": "20 September 2023",
      "description": [
        "The project involves providing Third Party Inspection (TPI) services for the construction work of Chipwad Lake Development at Padra. The project is executed under Padra Nagarpalika, with the goal of enhancing the local water body and improving the surrounding environment.",
        "The TPI services include monitoring the construction processes and ensuring compliance with the technical specifications. This involves inspecting materials, construction methods, and the overall progress of the work. The TPI services are designed to ensure the development work meets required environmental, safety, and quality standards. The ultimate goal is to ensure the Chipwad Lake development is completed effectively and efficiently."
      ],
      "keyPoints": [
        "Provided third-party inspection services during the construction of Chipwad Lake development.",
        "Monitored the quality of materials and construction techniques used in the project.",
        "Ensured that all construction activities adhered to project specifications and standards.",
        "Verified that the work met environmental and safety requirements during construction.",
        "Provided timely inspections and reports to ensure smooth project progress and compliance."
      ],
      "image": "https://via.placeholder.com/900x600"
    },
    "3 TPI Services for Development Work": {
      "title": "Third Party Inspection Services for Beautification of Chipwad Lake",
      "client": "Padra Nagarpalika",
      "location": "Padra, Gujarat, India",
      "completed": "20 September 2023",
      "description": [
        "The project involves providing Third Party Inspection (TPI) services for the development and beautification work of Chipwad Lake at Padra. Executed under Padra Nagarpalika, this project focuses on enhancing the aesthetic and environmental aspects of the lake, making it a recreational and ecological asset for the community.",
        "The TPI services cover the inspection of all aspects of the development and beautification work. This includes monitoring the construction process, verifying the quality of materials, and ensuring adherence to the design and environmental guidelines. The services aim to ensure the work enhances the lake’s beauty while maintaining sustainability and safety standards."
      ],
      "keyPoints": [
        "Provided third-party inspection services during the development and beautification work of Chipwad Lake.",
        "Monitored construction practices, landscaping, and infrastructure work to ensure quality and compliance.",
        "Ensured that the beautification project adhered to environmental and design guidelines.",
        "Verified that the materials used were of high quality and suitable for the lake’s aesthetic and environmental requirements.",
        "Provided ongoing inspections and reports to ensure the project’s progress was in line with specifications and timelines."
      ],
      "image": "https://via.placeholder.com/900x600"
    },
    "TPI Services for Development of Karjan Lake": {
      "title": "Third Party Inspection Services for Development of Karjan Lake",
      "client": "Karjan Nagarpalika",
      "location": "Karjan, Gujarat, India",
      "completed": "25 March 2021",
      "description": [
        "The project involves providing Third Party Inspection (TPI) services for the development of Karjan Lake, which includes earth filling, stone pinching, jogging track construction, compound wall, gazebos, gates, and other civil works. This development is carried out under the grant of the SJMMSVY Agavi Odakh, UDP-88 for the year 2016-17, at Karjan Nagarpalika.",
        "The TPI services include overseeing the entire construction process, ensuring the quality and compliance of all civil works, including earth filling, stone pinching, track construction, and installation of gazebos and gates. The services also involve regular inspections to verify that the materials used and the construction methods are in line with the approved plans and specifications. The project ensures the work is completed according to environmental and safety standards to create a sustainable and enjoyable space for the public."
      ],
      "keyPoints": [
        "Provided third-party inspection services throughout the development of Karjan Lake.",
        "Monitored the quality of earth filling, stone pinching, and civil works to ensure adherence to the project specifications.",
        "Verified the construction of jogging tracks, compound walls, gazebos, and gates for quality and safety.",
        "Ensured that the project adhered to the approved environmental and safety guidelines.",
        "Provided detailed inspections and reports to ensure that the work progressed according to the set timelines and quality standards."
      ],
      "image": "https://via.placeholder.com/900x600"
    },
  },

"BuildingProject": {
    "Welding and Asphalt Recarpeting of Existing Road": {
      "title": "Third Party Inspection Services for Welding and Asphalt Recarpeting of Road",
      "client": "Jamnagar Municipal Corporation",
      "location": "Jamnagar, Gujarat, India",
      "completed": "13 July 2021",
      "description": [
        "The project involves Third Party Inspection (TPI) services for welding and asphalt recarpeting of an existing road from Gyan Shakti Circle through Hariya College, Railway Over Bridge, and up to the Rajkot By-Pass Road. The scope of work includes the construction of three RCC box culvert cross-drainage structures, as well as the installation of a 7.50 x 2.67 meter pre-cast RCC box culvert using the pushing technique.",
        "Additional works include the construction of RCC cast-in-situ boxes, approach portions, and other miscellaneous works. The project is located under the Broad Gauge Railway Line Jamnagar-Lakhabawal Line at Km 831/2-3 of Western Railway, within the Jamnagar Municipal Area, and is funded under the SJMMSVY scheme."
      ],
      "keyPoints": [
        "Provided third-party inspection services for the welding and asphalt recarpeting work on the road.",
        "Monitored the construction of three RCC box culverts and cross-drainage works to ensure adherence to specifications.",
        "Inspected the construction and insertion of the pre-cast RCC box culvert using the pushing technique for compliance with quality standards.",
        "Ensured proper construction of RCC cast-in-situ boxes, approach portions, and other miscellaneous infrastructure.",
        "Verified the work met safety and quality standards for the railway line crossing and road development project."
      ],
      "image": "https://via.placeholder.com/900x600"
    },
    "TPI Services for Construction of 480 Dwelling Units": {
      "title": "Third Party Inspection Services for 480 Dwelling Units Construction",
      "client": "Dahod Nagar Palika",
      "location": "Dahod, Gujarat, India",
      "completed": "30 December 2017",
      "description": [
        "The project involves providing Third Party Inspection (TPI) services for the construction of 480 dwelling units (G+1 RCC framed structure) under the Integrated Housing and Slum Development Programme (IHSDP) for slum areas at Dahod.",
        "The project is executed under the Dahod Nagar Palika with the goal of improving housing conditions for residents by providing well-constructed, quality housing. The scope includes ensuring that all construction works are carried out in compliance with the approved standards and specifications."
      ],
      "keyPoints": [
        "Provided third-party inspection services throughout the construction of 480 dwelling units under the IHSDP.",
        "Monitored the quality of materials used in the RCC framed structure to ensure compliance with project specifications.",
        "Ensured that the construction adhered to safety, environmental, and design guidelines.",
        "Verified that the project was completed according to the required standards and within the scheduled timeframe.",
        "Provided ongoing inspections and reports to ensure the overall quality and safety of the construction work."
      ],
      "image": "https://via.placeholder.com/900x600"
    },
    "Work of Yoga Pradarshani Bhavan and Girls Hostel": {
      "title": "Third Party Inspection and Quality Assurance for Yoga Bhavan and Girls Hostel",
      "client": "Shree Somnath Sanskrit University",
      "location": "Somnath, Gujarat, India",
      "completed": "27 May 2022",
      "description": [
        "The project involves providing Third Party Inspection (TPI) and Quality Assurance (QA) services for the construction of Yoga Pradarshani Bhavan and Girls Hostel at Shree Somnath Sanskrit University.",
        "The objective of the project is to enhance the university’s infrastructure by creating dedicated spaces for yoga activities and hostel facilities for female students. The TPI and QA services ensure that all construction work meets the required quality standards, safety guidelines, and specifications."
      ],
      "keyPoints": [
        "Provided third-party inspection and quality assurance services throughout the construction of Yoga Pradarshani Bhavan and Girls Hostel.",
        "Monitored the quality of materials and construction methods used to ensure compliance with specifications.",
        "Verified the structural integrity and safety standards of the building works.",
        "Ensured the project adhered to the approved designs and timelines.",
        "Provided detailed inspections and reports to ensure the overall quality of the construction."
      ],
      "image": "https://via.placeholder.com/900x600"
    },
    "Work of Construction of Guest House and Library": {
      "title": "Third Party Inspection and Quality Assurance for Guest House and Library Construction",
      "client": "Shree Somnath Sanskrit University",
      "location": "Somnath, Gujarat, India",
      "completed": "15 September 2021",
      "description": [
        "The project involves providing Third Party Inspection (TPI) and Quality Assurance (QA) services for the construction of a Guest House and Library Building at Shree Somnath Sanskrit University.",
        "The aim of the project is to expand the university’s facilities by adding a guest house for visiting faculty and dignitaries, and a library building to support academic activities. TPI and QA services ensure that all construction works meet the required standards, safety protocols, and specifications."
      ],
      "keyPoints": [
        "Provided third-party inspection and quality assurance services for the construction of the guest house and library buildings.",
        "Monitored the quality of materials used in the construction to ensure they met project specifications.",
        "Ensured that all construction activities adhered to safety standards and regulatory requirements.",
        "Verified that the guest house and library buildings were built according to the approved designs and within the allocated time frame.",
        "Provided detailed inspections and reports to maintain the quality of the construction throughout the project."
      ],
      "image": "https://via.placeholder.com/900x600"
    }
  },

  "RoadProject": {

    
      "Inspection of Material & Construction Work of Cement Concrete Road": {
        "title": "Third Party Inspection for Cement Concrete Road Construction",
        "client": "Manavadar Nagarpalika",
        "location": "Manavadar, Junagadh, Gujarat, India",
        "completed": "26 November 2022",
        "description": [
          "The project involves providing Third Party Inspection (TPI) services for the construction of a cement concrete road with tri-mix, shed, paving block flooring, RCC box gutter, box culvert, RCC retaining wall, and compound wall at various locations in Manavadar, District Junagadh.",
          "The construction work is funded under multiple schemes including the Swarn Jayanti Mukhya Mantri Saheri Vikas Yojna (UDP-78), 15th Finance Commission Grant, and other state-level grants across several financial years (2014-15, 2017-18, 2019-20, 2021-22, 2022-23). The TPI services ensure compliance with the required quality standards, safety regulations, and specifications."
        ],
        "keyPoints": [
          "Provided third-party inspection services for cement concrete roads and associated infrastructure.",
          "Monitored the quality of materials used, including paving blocks and RCC components.",
          "Ensured compliance with safety standards and regulatory requirements.",
          "Verified construction work adhered to approved designs and specifications.",
          "Provided detailed inspections and reports throughout the construction process."
        ],
        "image": "https://via.placeholder.com/900x600"
      },
      "Inspection of Material & Construction Work of Cement Concrete Road v2": {
        "title": "Third Party Inspection for Cement Concrete Road Construction v2",
        "client": "Manavadar Nagarpalika",
        "location": "Manavadar, Junagadh, Gujarat, India",
        "completed": "26 November 2022",
        "description": [
          "The project involves providing Third Party Inspection (TPI) services for the construction of a cement concrete road with tri-mix, shed, paving block flooring, RCC box gutter, box culvert, RCC retaining wall, and compound wall at various locations in Manavadar, District Junagadh.",
          "The work is funded under the Swarn Jayanti Mukhya Mantri Saheri Vikas Yojna (UDP-78) and the 15th Finance Commission Grant, spanning multiple financial years (2014-15, 2017-18, 2019-20, 2021-22, 2022-23). The TPI services ensure all materials and construction works meet necessary quality standards and project specifications."
        ],
        "keyPoints": [
          "Provided third-party inspection services for cement concrete roads and infrastructure.",
          "Monitored materials used such as paving blocks and RCC components to ensure compliance.",
          "Ensured construction adhered to safety and regulatory standards.",
          "Verified all work was in line with approved designs, specifications, and timelines.",
          "Provided detailed inspection reports for quality assurance throughout the project."
        ],
        "image": "https://via.placeholder.com/900x600"
      },
      "TPI Services for Monitoring": {
        "title": "Third Party Inspection Services for Chiloda Road and Infrastructure Monitoring",
        "client": "Gandhinagar Urban Development Authority",
        "location": "Gandhinagar, Gujarat, India",
        "completed": "13 May 2015",
        "description": [
          "The project involves providing Third Party Inspection (TPI) services for monitoring, technical audits, and quality assurance of the Chiloda (TP-17) Road and other infrastructure projects within the Gandhinagar Urban Development Authority (GUDA) area.",
          "The aim is to ensure all construction work complies with the highest quality standards and specifications. TPI services include verifying material quality, adhering to safety and regulatory guidelines, and assessing the structural integrity of completed works."
        ],
        "keyPoints": [
          "Provided third-party inspection services to monitor Chiloda (TP-17) Road and infrastructure projects in the GUDA area.",
          "Performed technical audits to ensure the work adhered to approved designs and quality standards.",
          "Monitored material quality and verified compliance with project specifications.",
          "Ensured construction activities complied with safety regulations and project specifications.",
          "Provided detailed inspection reports to ensure overall quality and integrity of the construction work."
        ],
        "image": "https://via.placeholder.com/900x600"
      },
      "TPI Services for Construction of RCC Road": {
        "title": "Third Party Inspection for RCC Road and Paver Blocks Construction",
        "client": "Karjan Nagarpalika",
        "location": "Karjan, Vadodara, Gujarat, India",
        "completed": "21 March 2023",
        "description": [
          "The project involves providing Third Party Inspection (TPI) services for the construction of RCC roads and paver blocks at various locations in Karjan, District Vadodara, under the Swarn Jayanti Chief Minister Urban Development-Janbhagidari Grant for the year 2022-23 (Part-I).",
          "The TPI services ensure all construction work complies with the prescribed quality standards and specifications to improve urban infrastructure and transportation."
        ],
        "keyPoints": [
          "Provided third-party inspection services for RCC roads and paver blocks construction.",
          "Monitored materials used to ensure compliance with project specifications.",
          "Ensured construction met safety and regulatory standards throughout the process.",
          "Verified construction work adhered to approved designs and timelines.",
          "Provided detailed inspection reports and technical audits to ensure high-quality standards."
        ],
        "image": "https://via.placeholder.com/900x600"
      },
    },

    "FisheryWork": {
      "Third Party Inspection and Quality Assurance": {
        "title": "Third Party Inspection and Quality Assurance for Mangrol Fishery Harbour Project Phase III, Part-A",
        "client": "Gujarat Maritime Board",
        "location": "Mangrol, Gujarat, India",
        "completed": "31 October 2021",
        "description": [
          "The project involves providing Third Party Inspection and Quality Assurance (TPI & QA) services for the development of Mangrol Fishery Harbour Project Phase III, Part-A, with a focus on offshore structures.",
          "The project is being executed under the Gujarat Maritime Board, aiming to upgrade the existing fishery harbour to accommodate increased fishing and maritime activities. The TPI & QA services ensure the construction of offshore structures meets the highest standards and specifications, including quality control of materials and construction practices."
        ],
        "keyPoints": [
          "Provided third-party inspection and quality assurance services for the construction of offshore structures at Mangrol Fishery Harbour.",
          "Monitored the construction processes to ensure compliance with technical specifications and industry standards.",
          "Inspected materials used to verify quality and suitability for the project.",
          "Reviewed design plans and construction methods to ensure compliance with safety, regulatory, and environmental standards.",
          "Addressed any issues promptly to ensure project progress while maintaining quality and timelines."
        ],
        "image": "https://via.placeholder.com/900x600"
      }
    },

    
    "SolarRooftop": {
        "TPQA Work of Distribution Network with Tap Connection": {
          "title": "Third Party Quality Assurance (TPQA) for Distribution Network with Tap Connection and Solar Rooftop Plant",
          "client": "Gondal Nagarpalika",
          "location": "Gondal, District Rajkot, Gujarat, India",
          "expectedCompletion": "01 April 2024",
          "description": [
            "The project involves providing Third Party Quality Assurance (TPQA) services for the designing, construction, testing, and commissioning of a distribution network with tap connections, a 100 KW solar rooftop plant, and electro-mechanical works under the Nal se Jal program.",
            "The initiative aims to ensure the availability of clean and sustainable water for Gondal residents, with a one-year operation and maintenance (O&M) period and a three-month trial run to verify system performance."
          ],
          "keyPoints": [
            "Provided TPQA services for the installation of the distribution network and tap connections at Gondal Nagarpalika.",
            "Ensured the construction and installation of the 100 KW solar rooftop plant adhered to quality and regulatory standards.",
            "Monitored the testing and commissioning process to ensure the system's functionality and reliability.",
            "Verified that the electro-mechanical works were executed according to approved designs and specifications.",
            "Supervised the trial run and provided support during the one-year operation and maintenance period to ensure optimal system performance."
          ],
          "image": "https://via.placeholder.com/900x600"
        }
      }
};


const HeroSection = ({ projectData }) => {
  return (
    <div className="herosection">
      <div className="herocontent">
        <h1>{projectData.title}</h1>
        <p><strong>Building Today <br></br>For Sustainable Tomorrow</strong></p>
        <div>
          <button className="redbutton"><Link to="/Contact">Get A Quote</Link></button>
          <button className="outlinebutton"><Link to="/Brochures">More About Us</Link></button>
        </div>
      </div>
    </div>
  );
};

const ProjectDetails = ({ projectData, handleNavigation }) => {
  return (
    <div className="project-details">
      {/* Left Section */}
      <div className="left-section">
        <h4>Project Details</h4>
        <p>
          <strong>Client:</strong> <div>{projectData.client}</div>
        </p>
        <p>
          <strong>Location:</strong> <div>{projectData.location}</div>
        </p>
        <p>
          <strong>Completed:</strong> <div>{projectData.completed}</div>
        </p>

        <div className="button-group">
          <button 
            className="default-button"
            onClick={() => handleNavigation('prev')}
          >
            Previous Project
          </button>
          <button 
            className="default-button"
            onClick={() => handleNavigation('next')}
          >
            Next Project
          </button>
        </div>
        <button className="pdf-button">Company Brochure</button>
        <h4>Contact Info</h4>
        <p>Address: Ahmedabad, India</p>
        <p>Phone No: +91 1234567890</p>
        <p>Email: example@email.com</p>
        <p>Mon-Sat: 9:00 AM - 6:00 PM</p>
      </div>

      {/* Right Section */}
      <div className="right-section">
        <img
          src={projectData.image}
          alt={projectData.title}
          className="project-image"
        />
        <h2>{projectData.title}</h2>
        {projectData.description.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
        
        <h2>What We Do</h2>
        <p>We specialize in providing high-quality services tailored to meet our clients' needs.</p>
        <ul>
          {projectData.keyPoints.map((point, index) => (
            <li key={index}>✔ {point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const SingleProject = () => {
  const { service, projectTitle } = useParams();
  const navigate = useNavigate();

  // Get the current project data
  const projectData = projectsData[service]?.[projectTitle];

  // Handle case when project is not found
  if (!projectData) {
    return <div>Project not found</div>;
  }

  // Navigation logic
  const handleNavigation = (direction) => {
    const services = Object.keys(projectsData);
    let currentServiceIndex = services.indexOf(service);
    let currentService = projectsData[service];
    let projects = Object.keys(currentService);
    let currentProjectIndex = projects.indexOf(projectTitle);

    if (direction === 'next') {
      if (currentProjectIndex < projects.length - 1) {
        navigate(`/Project/${service}/${projects[currentProjectIndex + 1]}`);
      } else if (currentServiceIndex < services.length - 1) {
        const nextService = services[currentServiceIndex + 1];
        const nextServiceProjects = Object.keys(projectsData[nextService]);
        navigate(`/Project/${nextService}/${nextServiceProjects[0]}`);
      }
    } else {
      if (currentProjectIndex > 0) {
        navigate(`/Project/${service}/${projects[currentProjectIndex - 1]}`);
      } else if (currentServiceIndex > 0) {
        const prevService = services[currentServiceIndex - 1];
        const prevServiceProjects = Object.keys(projectsData[prevService]);
        navigate(`/Project/${prevService}/${prevServiceProjects[prevServiceProjects.length - 1]}`);
      }
    }
  };

  return (
    <>
      <HeroSection projectData={projectData} />
      <ProjectDetails 
        projectData={projectData}
        handleNavigation={handleNavigation}
      />
    </>
  );
};

export default SingleProject;
