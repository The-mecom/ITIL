import { Flashcard } from '../types';

export const ITIL_FLASHCARDS: Flashcard[] = [
  {
    id: 'fc-1',
    term: 'Service',
    definition: 'A means of enabling value co-creation by facilitating outcomes that customers want to achieve, without the customer having to manage specific costs and risks.',
    category: 'Key Concepts of Service Management',
    example: 'A cloud-based email hosting service. The business gets fully functional email (outcome) without having to buy physical email servers, hire system administrators, or manage electricity costs.'
  },
  {
    id: 'fc-2',
    term: 'Utility',
    definition: 'The functionality offered by a product or service to meet a particular need. Summarized as "what the service does" or "fit for purpose".',
    category: 'Key Concepts of Service Management',
    example: 'An online banking app allows users to transfer money, pay bills, and view their balance. These represent the utilities of the app.'
  },
  {
    id: 'fc-3',
    term: 'Warranty',
    definition: 'Assurance that a product or service will meet agreed requirements. Summarized as "how the service performs" or "fit for use" (usually involving availability, capacity, security, and continuity).',
    category: 'Key Concepts of Service Management',
    example: 'The banking app is guaranteed to be online 99.9% of the time, can handle 10,000 users concurrently, and uses bank-grade encryption to protect transaction data.'
  },
  {
    id: 'fc-4',
    term: 'Output',
    definition: 'A tangible or intangible deliverable of an activity.',
    category: 'Key Concepts of Service Management',
    example: 'A newly developed HR portal website launched for the human resources team.'
  },
  {
    id: 'fc-5',
    term: 'Outcome',
    definition: 'A result for a stakeholder enabled by one or more outputs.',
    category: 'Key Concepts of Service Management',
    example: 'HR staff spend 35% less time processing leave forms because employees can submit them directly via the portal, freeing up time for strategic recruiting.'
  },
  {
    id: 'fc-6',
    term: 'Sponsor',
    definition: 'A person who authorizes the budget for service consumption.',
    category: 'Key Concepts of Service Management',
    example: 'The Chief Financial Officer (CFO) who signs off on the annual budget for the company\'s Salesforce subscription.'
  },
  {
    id: 'fc-7',
    term: 'Customer',
    definition: 'A person who defines the requirements for a service and takes responsibility for the outcomes of service consumption.',
    category: 'Key Concepts of Service Management',
    example: 'The VP of Sales who defines the reports, lead pipelines, and custom fields needed in the new CRM.'
  },
  {
    id: 'fc-8',
    term: 'User',
    definition: 'A person who actively uses services.',
    category: 'Key Concepts of Service Management',
    example: 'Individual sales representatives who log in daily to enter customer leads and update deal progress.'
  },
  {
    id: 'fc-9',
    term: 'Cost',
    definition: 'The amount of money spent on a specific activity or resource. Can be removed from the consumer (removed costs) or imposed on the consumer (imposed costs).',
    category: 'Key Concepts of Service Management',
    example: 'An imposed cost when using a SaaS tool includes the subscription fee and the internet bandwidth needed to run it.'
  },
  {
    id: 'fc-10',
    term: 'Risk',
    definition: 'A possible event that could cause harm or loss, or make it more difficult to achieve objectives.',
    category: 'Key Concepts of Service Management',
    example: 'The risk of a server outage crashing the online store on Black Friday, causing lost sales.'
  },
  {
    id: 'fc-11',
    term: 'Focus on Value',
    definition: 'All activities conducted by the service provider should link, directly or indirectly, to value for the service consumer.',
    category: 'The 7 Guiding Principles',
    example: 'Before spending 20 hours designing an elaborate custom PDF reporting feature, a developer interviews users to confirm if they actually need PDFs or just want a dashboard.'
  },
  {
    id: 'fc-12',
    term: 'Start Where You Are',
    definition: 'Do not start from scratch without considering what is already available to be leveraged. Direct observation is vital.',
    category: 'The 7 Guiding Principles',
    example: 'Instead of scrapping an entire legacy ticketing database, a team builds an API layer on top of it to feed tickets into a new modern frontend UI.'
  },
  {
    id: 'fc-13',
    term: 'Progress Iteratively with Feedback',
    definition: 'Do not attempt to do everything at once. Organize work into small, manageable sections that can be executed and evaluated incrementally.',
    category: 'The 7 Guiding Principles',
    example: 'Developing a new customer portal by launching a simple "beta" password-reset page first, collecting user feedback, and then building the rest of the portal based on that feedback.'
  },
  {
    id: 'fc-14',
    term: 'Collaborate and Promote Visibility',
    definition: 'Working together across boundaries produces results that have greater buy-in, more relevance, and a higher chance of success. Visual dashboards help.',
    category: 'The 7 Guiding Principles',
    example: 'Placing a giant Kanban board in a shared workspace so that both the developers and business stakeholders can visually track ticket progress.'
  },
  {
    id: 'fc-15',
    term: 'Think and Work Holistically',
    definition: 'No service, practice, department, or technology stands alone. Treat the service provider, consumer, and resources as an integrated ecosystem.',
    category: 'The 7 Guiding Principles',
    example: 'When upgrading a core database, considering not just the server speed but also user training, vendor support contracts, security audits, and service desk queues.'
  },
  {
    id: 'fc-16',
    term: 'Keep It Simple and Practical',
    definition: 'Use the minimum number of steps to accomplish an objective. Eliminate any activity or process step that does not co-create value.',
    category: 'The 7 Guiding Principles',
    example: 'Removing a requirement for three layers of manager approvals for low-cost keyboard and mouse purchases, replacing it with instant automated approval.'
  },
  {
    id: 'fc-17',
    term: 'Optimize and Automate',
    definition: 'Make services and processes as effective and useful as possible before using technology to automate them. Eliminate waste first.',
    category: 'The 7 Guiding Principles',
    example: 'Refining the manual password reset verification script to 3 simple steps first, and only then building a chatbot to execute those exact 3 steps.'
  },
  {
    id: 'fc-18',
    term: 'Organizations and People',
    definition: 'The dimension that defines organizational structures, roles, responsibilities, reporting relationships, and company culture.',
    category: 'The Four Dimensions of Service Management',
    example: 'The escalation path from Level 1 Service Desk to Level 2 Engineering, and fostering a culture of collaborative problem-solving.'
  },
  {
    id: 'fc-19',
    term: 'Information and Technology',
    definition: 'The dimension that encompasses the information and knowledge assets, databases, communication channels, and software technologies needed to manage services.',
    category: 'The Four Dimensions of Service Management',
    example: 'The configuration of a central CMDB (Configuration Management Database), workflow software, and team collaboration tools.'
  },
  {
    id: 'fc-20',
    term: 'Partners and Suppliers',
    definition: 'The dimension focused on an organization\'s relationships with other organizations involved in the design, development, deployment, delivery, and improvement of services.',
    category: 'The Four Dimensions of Service Management',
    example: 'A contract with Amazon Web Services (AWS) for cloud hosting, including their service uptime SLA.'
  },
  {
    id: 'fc-21',
    term: 'Value Streams and Processes',
    definition: 'The dimension defining the specific workflows, activities, and procedures necessary to convert inputs (such as user issues) into valuable outputs (such as service restoration).',
    category: 'The Four Dimensions of Service Management',
    example: 'The exact step-by-step sequence of events triggered when a high-priority server alert fires, from pager alerts to post-incident review.'
  },
  {
    id: 'fc-22',
    term: 'Service Value Chain (SVC)',
    definition: 'An operating model within the Service Value System (SVS) featuring six core activities required to respond to demand and enable value co-creation.',
    category: 'The Service Value System & Service Value Chain',
    example: 'The overall flow starting with "Engage" (talking to customer), to "Design" (planning the solution), to "Obtain/Build" (coding the app), to "Deliver & Support" (hosting and maintaining the live app).'
  },
  {
    id: 'fc-23',
    term: 'Incident',
    definition: 'An unplanned interruption to a service or reduction in the quality of a service.',
    category: 'Key ITIL Practices',
    example: 'The office Wi-Fi suddenly stops working, preventing staff from connecting to the internet.'
  },
  {
    id: 'fc-24',
    term: 'Problem',
    definition: 'A cause, or potential cause, of one or more incidents.',
    category: 'Key ITIL Practices',
    example: 'Investigations reveal that the Wi-Fi outages are caused by a faulty firmware update installed on all office routers.'
  },
  {
    id: 'fc-25',
    term: 'Known Error',
    definition: 'A problem that has been analyzed and has an identified workaround or permanent resolution.',
    category: 'Key ITIL Practices',
    example: 'The router firmware issue is logged in the known error database, noting that rebooting the routers hourly clears the crash state until a patch is released.'
  },
  {
    id: 'fc-26',
    term: 'Workaround',
    definition: 'A temporary solution that reduces or eliminates the impact of an incident or problem for which a full resolution is not yet available.',
    category: 'Key ITIL Practices',
    example: 'Providing wired ethernet cables to employees so they can keep working while the Wi-Fi router issues are resolved.'
  },
  {
    id: 'fc-27',
    term: 'Service Desk',
    definition: 'The single point of contact between the service provider and all users. Acts as the gateway for incident logs and service requests.',
    category: 'Key ITIL Practices',
    example: 'An IT support help desk with an email address, chat window, and phone number where users can report that their computer won\'t boot.'
  },
  {
    id: 'fc-28',
    term: 'Service Level Agreement (SLA)',
    definition: 'A documented agreement between a service provider and a customer that identifies both services required and the expected level of service.',
    category: 'Key ITIL Practices',
    example: 'A commitment that critical (Priority 1) software crashes will be responded to in 15 minutes and resolved within 4 hours.'
  },
  {
    id: 'fc-29',
    term: 'Service Request',
    definition: 'A request from a user or a user\'s authorized representative that initiates a service action which has been agreed as a normal part of service delivery.',
    category: 'Key ITIL Practices',
    example: 'A new employee requesting a standard company laptop, a corporate email address, and access to the shared marketing folder.'
  },
  {
    id: 'fc-30',
    term: 'Change Enablement',
    definition: 'The practice of maximizing the number of successful service and product changes by ensuring that risks are properly assessed, authorizing changes to proceed, and managing the change schedule.',
    category: 'Key ITIL Practices',
    example: 'A team scheduling a major software database migration for 2:00 AM on a Sunday, notifying all clients, backing up the database, and designating a rollback manager.'
  }
];
