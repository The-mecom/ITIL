import { Question } from '../types';

export const ITIL_QUESTIONS: Question[] = [
  {
    "id": 1,
    "question": "How are target resolution times used in the 'incident management' practice?",
    "options": [
      "They are agreed, documented, and communicated to help set user expectations",
      "They are established, reviewed, and reported to ensure that customers are happy with the service",
      "They are initiated, approved, and managed to ensure that predictable responses are achieved",
      "They are scheduled, assessed and authorized to reduce the risk of service failures"
    ],
    "answer": 0,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: A — \"They are agreed, documented, and communicated to help set user expectations\". This is strongly supported by the ITIL 4 Foundation guidance on p.131 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 2,
    "question": "Why should some service requests be fulfilled with no additional approvals?",
    "options": [
      "To ensure that spending is properly accounted for",
      "To ensure that information security requirements are met",
      "To streamline the fulfilment workflow",
      "To set user expectations for fulfilment times"
    ],
    "answer": 2,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: C — \"To streamline the fulfilment workflow\". This is strongly supported by the ITIL 4 Foundation guidance on p.166 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 3,
    "question": "What is a set of specialized organizational capabilities for enabling value for customers in the form of services?",
    "options": [
      "Service offering",
      "Service provision",
      "Service management",
      "Service consumption"
    ],
    "answer": 2,
    "category": "Key Concepts of Service Management",
    "explanation": "Correct answer: C — \"Service management\". This is strongly supported by the ITIL 4 Foundation guidance on p.205 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 4,
    "question": "Which gives a user access to a system?",
    "options": [
      "Service requirement",
      "Service agreement",
      "Service consumption",
      "Service provision"
    ],
    "answer": 3,
    "category": "Key Concepts of Service Management",
    "explanation": "Correct answer: D — \"Service provision\". This is strongly supported by the ITIL 4 Foundation guidance on p.205 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 5,
    "question": "Which statement about managing incidents is CORRECT?",
    "options": [
      "Low impact incidents should be resolved efficiently, making logging unnecessary",
      "The 'incident management' practice should use a single process regardless of the impact of the incident",
      "Low impact incidents should be resolved efficiently so the resource required is reduced",
      "Incidents with the lowest impact should be resolved first"
    ],
    "answer": 2,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: C — \"Low impact incidents should be resolved efficiently so the resource required is reduced\". This is strongly supported by the ITIL 4 Foundation guidance on p.131 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 6,
    "question": "Which statement about the service value chain is CORRECT?",
    "options": [
      "The service value chain converts value into demand",
      "Each value chain activity uses different combinations of practices to convert inputs into outputs",
      "Each value chain activity identifies a requirement for resources from an external supplier",
      "The service value chain uses value streams to describe a combination of consumers and providers"
    ],
    "answer": 1,
    "category": "The Service Value System & Service Value Chain",
    "explanation": "Correct answer: B — \"Each value chain activity uses different combinations of practices to convert inputs into outputs\". This is strongly supported by the ITIL 4 Foundation guidance on p.68 (CHAPTER 4)."
  },
  {
    "id": 7,
    "question": "What describes how components and activities work together to facilitate value creation?",
    "options": [
      "The ITIL service value system",
      "The ITIL guiding principles",
      "The four dimensions of service management",
      "A service relationship"
    ],
    "answer": 0,
    "category": "Key Concepts of Service Management",
    "explanation": "Correct answer: A — \"The ITIL service value system\". This is strongly supported by the ITIL 4 Foundation guidance on p.47 (CHAPTER 4)."
  },
  {
    "id": 8,
    "question": "Which practice involves the management of vulnerabilities that were not identified before the service went live?",
    "options": [
      "Service request management",
      "Problem management",
      "Change control",
      "Service level management"
    ],
    "answer": 1,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: B — \"Problem management\". This is strongly supported by the ITIL 4 Foundation guidance on p.143 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 9,
    "question": "Which statement about the use of measurement in the 'start where you are' guiding principle is CORRECT?",
    "options": [
      "It should always be used to support direct observation",
      "It should always be used instead of direct observation",
      "Measured data is always more accurate than direct observation",
      "The act of measuring always positively impacts results"
    ],
    "answer": 0,
    "category": "The 7 Guiding Principles",
    "explanation": "Correct answer: A — \"It should always be used to support direct observation\". This is strongly supported by the ITIL 4 Foundation guidance on p.56 (CHAPTER 4)."
  },
  {
    "id": 10,
    "question": "Which ITIL practice recommends performing service reviews to ensure that services continue to meet the needs of the organization?",
    "options": [
      "Service desk",
      "Service request management",
      "Service level management",
      "Service configuration management"
    ],
    "answer": 2,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: C — \"Service level management\". This is strongly supported by the ITIL 4 Foundation guidance on p.162 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 11,
    "question": "What should be considered as part of the 'partners and suppliers' dimension?",
    "options": [
      "The level of integration and formality involved in the relationships between organizations",
      "The activities, workflows, controls and procedures needed to achieve the agreed objectives",
      "The information created, managed and used in the course of service provision and consumption",
      "The required skills and competencies of teams and individual members of the organization"
    ],
    "answer": 0,
    "category": "The Four Dimensions of Service Management",
    "explanation": "Correct answer: A — \"The level of integration and formality involved in the relationships between organizations\". This is strongly supported by the ITIL 4 Foundation guidance on p.40 (Chapter 3 – The four dimensions of service management)."
  },
  {
    "id": 12,
    "question": "Which practice makes new services available for use?",
    "options": [
      "Change enablement",
      "Release management",
      "Deployment management",
      "IT asset management"
    ],
    "answer": 1,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: B — \"Release management\". This is strongly supported by the ITIL 4 Foundation guidance on p.203 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 13,
    "question": "Which activity contributes to the 'where are we now?' step of the 'continual improvement' model?",
    "options": [
      "Executing improvement actions",
      "Performing baseline assessments",
      "Defining the improvement plan",
      "Understanding the business mission"
    ],
    "answer": 1,
    "category": "The Service Value System & Service Value Chain",
    "explanation": "Correct answer: B — \"Performing baseline assessments\". This is supported by the ITIL 4 Foundation guidance on p.77 (CHAPTER 4)."
  },
  {
    "id": 14,
    "question": "Which guiding principle considers the importance of customer loyalty?",
    "options": [
      "Progress iteratively with feedback",
      "Focus on value",
      "Optimize and automate",
      "Start where you are"
    ],
    "answer": 1,
    "category": "The 7 Guiding Principles",
    "explanation": "Correct answer: B — \"Focus on value\". This is strongly supported by the ITIL 4 Foundation guidance on p.49 (CHAPTER 4)."
  },
  {
    "id": 15,
    "question": "Which is a recommendation of the guiding principle 'think and work holistically'?",
    "options": [
      "Conduct a review of existing service management practices and decide what to keep and what to discard",
      "Review how an improvement initiative can be organized into smaller, manageable sections that can be completed in a timely manner",
      "Review service management practices and remove any unnecessary complexity",
      "Use the four dimensions of service management to ensure coordination of all aspects of an improvement initiative"
    ],
    "answer": 3,
    "category": "The 7 Guiding Principles",
    "explanation": "Correct answer: D — \"Use the four dimensions of service management to ensure coordination of all aspects of an improvement initiative\". This is strongly supported by the ITIL 4 Foundation guidance on p.43 (Chapter 3 – The four dimensions of service management)."
  },
  {
    "id": 16,
    "question": "Which statement about 'continual improvement' is CORRECT?",
    "options": [
      "All improvement ideas should be logged in a single 'continual improvement register'",
      "A single team should carry out 'continual improvement' across the organization",
      "'Continual improvement' should have minimal interaction with other practices",
      "Everyone in the organization is responsible for some aspects of 'continual improvement'"
    ],
    "answer": 3,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: D — \"Everyone in the organization is responsible for some aspects of 'continual improvement'\". This is supported by the ITIL 4 Foundation guidance on p.117 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 17,
    "question": "What impact does automation have on a service desk?",
    "options": [
      "Less low level work and a greater ability to focus on user experience",
      "Increased phone contact and a reduced ability to focus on user experience",
      "Ability to work from multiple locations, geographically dispersed",
      "Ability to work from a single centralized location"
    ],
    "answer": 0,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: A — \"Less low level work and a greater ability to focus on user experience\". This is strongly supported by the ITIL 4 Foundation guidance on p.160 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 18,
    "question": "Identify the missing word(s) in the following sentence: The service desk should be the entry point and single point of contact for the [?] with all of its users.",
    "options": [
      "Service consumer",
      "Service provider",
      "Customer",
      "Supplier"
    ],
    "answer": 1,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: B — \"Service provider\". This is strongly supported by the ITIL 4 Foundation guidance on p.159 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 19,
    "question": "What aspect of 'service level management' asks service consumers what their work involves and how technology helps them?",
    "options": [
      "Customer engagement",
      "Operational metrics",
      "Business metrics",
      "Customer feedback"
    ],
    "answer": 0,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: A — \"Customer engagement\". This is strongly supported by the ITIL 4 Foundation guidance on p.164 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 20,
    "question": "Which is a result of applying the guiding principle 'progress iteratively with feedback'?",
    "options": [
      "The ability to discover and respond to failure earlier",
      "Standardization of practices and services",
      "Understanding the customer's perception of value",
      "Understanding the current state and identifying what can be reused"
    ],
    "answer": 0,
    "category": "The 7 Guiding Principles",
    "explanation": "Correct answer: A — \"The ability to discover and respond to failure earlier\". This is strongly supported by the ITIL 4 Foundation guidance on p.58 (CHAPTER 4)."
  },
  {
    "id": 21,
    "question": "What can be used to determine if a service is 'fit for purpose'?",
    "options": [
      "Availability",
      "Warranty",
      "Outcome",
      "Utility"
    ],
    "answer": 3,
    "category": "Key Concepts of Service Management",
    "explanation": "Correct answer: D — \"Utility\". This is strongly supported by the ITIL 4 Foundation guidance on p.207 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 22,
    "question": "In service relationships, what is a benefit of identifying consumer roles?",
    "options": [
      "It enables effective stakeholder management",
      "It provides shared service expectations",
      "It removes constraints from the customer",
      "It enables a common definition of value"
    ],
    "answer": 0,
    "category": "Key Concepts of Service Management",
    "explanation": "Correct answer: A — \"It enables effective stakeholder management\". This is strongly supported by the ITIL 4 Foundation guidance on p.21 (Chapter 2 – Key concepts of service management)."
  },
  {
    "id": 23,
    "question": "Which is an external input to the service value chain?",
    "options": [
      "The 'improve' value chain activity",
      "An overall plan",
      "Customer requirements",
      "Feedback loops"
    ],
    "answer": 2,
    "category": "The Service Value System & Service Value Chain",
    "explanation": "Correct answer: C — \"Customer requirements\". This is strongly supported by the ITIL 4 Foundation guidance on p.55 (CHAPTER 4)."
  },
  {
    "id": 24,
    "question": "What term is used to describe whether a service will meet availability, capacity and security requirements?",
    "options": [
      "Outcomes",
      "Value",
      "Utility",
      "Warranty"
    ],
    "answer": 3,
    "category": "Key Concepts of Service Management",
    "explanation": "Correct answer: D — \"Warranty\". This is strongly supported by the ITIL 4 Foundation guidance on p.208 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 25,
    "question": "What is the purpose of the 'incident management' practice?",
    "options": [
      "To minimize the negative impact of incidents by restoring normal service operation as quickly as possible",
      "To capture demand for incident resolution and service requests",
      "To reduce the likelihood and impact of incidents by identifying actual and potential causes of incidents",
      "To support the agreed service quality by effective handling of all agreed user-initiated service requests"
    ],
    "answer": 0,
    "category": "The Service Value System & Service Value Chain",
    "explanation": "Correct answer: A — \"To minimize the negative impact of incidents by restoring normal service operation as quickly as possible\". This is strongly supported by the ITIL 4 Foundation guidance on p.131 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 26,
    "question": "What is defined as an unplanned interruption or reduction in the quality of a service?",
    "options": [
      "An incident",
      "A problem",
      "A change",
      "An event"
    ],
    "answer": 0,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: A — \"An incident\". This is strongly supported by the ITIL 4 Foundation guidance on p.131 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 27,
    "question": "Which ITIL practice has the purpose to establish and nurture the links between the organization and its stakeholders at strategic and tactical levels?",
    "options": [
      "Supplier management",
      "Change control",
      "Relationship management",
      "Service desk"
    ],
    "answer": 2,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: C — \"Relationship management\". This is strongly supported by the ITIL 4 Foundation guidance on p.106 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 28,
    "question": "What can help to reduce resistance to a planned improvement when applying the guiding principle 'collaborate and promote visibility'?",
    "options": [
      "Restricting information about the improvement to essential stakeholders only",
      "Increasing collaboration and visibility for the improvement",
      "Involving customers after all planning has been completed",
      "Engaging every stakeholder group in the same way, with the same communication"
    ],
    "answer": 2,
    "category": "The 7 Guiding Principles",
    "explanation": "Correct answer: C — \"Involving customers after all planning has been completed\". This is strongly supported by the ITIL 4 Foundation guidance on p.59 (CHAPTER 4)."
  },
  {
    "id": 29,
    "question": "What varies in size and complexity, and uses functions to achieve its objectives?",
    "options": [
      "A risk",
      "An organization",
      "A practice",
      "An outcome"
    ],
    "answer": 1,
    "category": "Key Concepts of Service Management",
    "explanation": "Correct answer: B — \"An organization\". This is strongly supported by the ITIL 4 Foundation guidance on p.19 (Chapter 2 – Key concepts of service management)."
  },
  {
    "id": 30,
    "question": "Which practice ensures that any addition, modification, or removal of anything that could have an effect on services is assessed and authorized?",
    "options": [
      "Deployment management",
      "Release management",
      "Change control",
      "Service configuration management"
    ],
    "answer": 2,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: C — \"Change control\". This is strongly supported by the ITIL 4 Foundation guidance on p.129 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 31,
    "question": "Which practice has a purpose that includes managing risks to confidentiality, integrity and availability?",
    "options": [
      "Information security management",
      "Continual improvement",
      "Monitoring and event management",
      "Service level management"
    ],
    "answer": 0,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: A — \"Information security management\". This is strongly supported by the ITIL 4 Foundation guidance on p.197 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 32,
    "question": "Which will help solve incidents more quickly?",
    "options": [
      "Target resolution times",
      "Escalating all incidents to support teams",
      "Collaboration between teams",
      "Detailed procedural steps for incident investigation"
    ],
    "answer": 3,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: D — \"Detailed procedural steps for incident investigation\". This is strongly supported by the ITIL 4 Foundation guidance on p.133 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 33,
    "question": "When is the earliest that a workaround can be documented in 'problem management'?",
    "options": [
      "After the problem has been logged",
      "After the problem has been prioritized",
      "After the problem has been analyzed",
      "After the problem has been resolved"
    ],
    "answer": 2,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: C — \"After the problem has been analyzed\". This is strongly supported by the ITIL 4 Foundation guidance on p.140 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 34,
    "question": "Which is an activity of the 'problem management' practice?",
    "options": [
      "Restoration of normal service operation as quickly as possible",
      "Prioritization of problems based on the risk that they pose",
      "Authorization of changes to resolve the cause of problems",
      "Resolution of incidents in a time that meets customer expectations"
    ],
    "answer": 1,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: B — \"Prioritization of problems based on the risk that they pose\". This is strongly supported by the ITIL 4 Foundation guidance on p.141 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 35,
    "question": "Which practice is MOST likely to benefit from the use of chatbots?",
    "options": [
      "Service level management",
      "Change enablement",
      "Continual improvement",
      "Service desk"
    ],
    "answer": 3,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: D — \"Service desk\". This is strongly supported by the ITIL 4 Foundation guidance on p.160 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 36,
    "question": "Where are the details of the required performance outcomes of a service defined?",
    "options": [
      "Service level agreements",
      "Service requests",
      "Service components",
      "Service offerings"
    ],
    "answer": 0,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: A — \"Service level agreements\". This is strongly supported by the ITIL 4 Foundation guidance on p.162 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 37,
    "question": "Which value chain activity ensures a shared understanding of the current status and required direction for all products and services?",
    "options": [
      "Plan",
      "Improve",
      "Design and transition",
      "Deliver and support"
    ],
    "answer": 0,
    "category": "The Service Value System & Service Value Chain",
    "explanation": "Correct answer: A — \"Plan\". This is strongly supported by the ITIL 4 Foundation guidance on p.201 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 38,
    "question": "Which practice has the purpose of ensuring that the organization's suppliers and their performance are managed appropriately to support the provision of seamless, quality products and services?",
    "options": [
      "Release management",
      "Supplier management",
      "Service management",
      "Relationship management"
    ],
    "answer": 1,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: B — \"Supplier management\". This is strongly supported by the ITIL 4 Foundation guidance on p.207 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 39,
    "question": "Which two practices interact the MOST with the service desk practice?",
    "options": [
      "Incident management and service request management",
      "Service request management and deployment management",
      "Deployment management and change enablement",
      "Change enablement and incident management"
    ],
    "answer": 0,
    "category": "The Four Dimensions of Service Management",
    "explanation": "Correct answer: A — \"Incident management and service request management\". This is strongly supported by the ITIL 4 Foundation guidance on p.39 (Chapter 3 – The four dimensions of service management)."
  },
  {
    "id": 40,
    "question": "Which is an activity of the 'incident management' practice?",
    "options": [
      "Assessing and prioritizing improvement opportunities",
      "Performing service reviews with customers",
      "Providing good-quality updates when expected",
      "Automating service requests to the greatest degree possible"
    ],
    "answer": 2,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: C — \"Providing good-quality updates when expected\". This is supported by the ITIL 4 Foundation guidance on p.132 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 41,
    "question": "Identify the missing words in the following sentence: A user is [?] that uses services.",
    "options": [
      "an organization",
      "a role",
      "a team",
      "a supplier"
    ],
    "answer": 1,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: B — \"a role\". This is strongly supported by the ITIL 4 Foundation guidance on p.205 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 42,
    "question": "Which is included in the purpose of the 'change enablement' practice?",
    "options": [
      "Make new and changed services available for use",
      "Ensure that risks have been properly assessed",
      "Record and report selected changes of state",
      "Plan and manage the full lifecycle of all IT assets"
    ],
    "answer": 1,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: B — \"Ensure that risks have been properly assessed\". This is strongly supported by the ITIL 4 Foundation guidance on p.128 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 43,
    "question": "Which activity is part of the 'continual improvement' practice?",
    "options": [
      "Identifying the cause of incidents and recommending related improvements",
      "Authorizing changes to implement improvements",
      "Logging and managing incidents that result in improvement opportunities",
      "Making business cases for improvement action"
    ],
    "answer": 3,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: D — \"Making business cases for improvement action\". This is strongly supported by the ITIL 4 Foundation guidance on p.91 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 44,
    "question": "In which step of the 'continual improvement model' is an improvement plan implemented?",
    "options": [
      "What is the vision?",
      "How do we get there?",
      "Take action",
      "Did we get there?"
    ],
    "answer": 2,
    "category": "The Service Value System & Service Value Chain",
    "explanation": "Correct answer: C — \"Take action\". This is strongly supported by the ITIL 4 Foundation guidance on p.81 (CHAPTER 4)."
  },
  {
    "id": 45,
    "question": "Which is the BEST example of a standard change?",
    "options": [
      "The review and authorization of a change requested by a customer",
      "The implementation of a critical software patch in response to a vendor security issue",
      "The installation of a software application in response to a service request",
      "The replacement of a component in response to a major incident"
    ],
    "answer": 2,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: C — \"The installation of a software application in response to a service request\". This is strongly supported by the ITIL 4 Foundation guidance on p.146 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 46,
    "question": "Which statement about the automation of service requests is CORRECT?",
    "options": [
      "Service requests that cannot be automated should be handled as incidents",
      "Service requests and their fulfilment should be automated as much as possible",
      "Service requests that cannot be automated should be handled as problems",
      "Service requests and their fulfilment should be carried out by service desk staff without automation"
    ],
    "answer": 1,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: B — \"Service requests and their fulfilment should be automated as much as possible\". This is strongly supported by the ITIL 4 Foundation guidance on p.166 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 47,
    "question": "Which can act as an operating model for an organization?",
    "options": [
      "The four dimensions of service management",
      "The service value chain",
      "The ITIL guiding principles",
      "Continual improvement"
    ],
    "answer": 1,
    "category": "The 7 Guiding Principles",
    "explanation": "Correct answer: B — \"The service value chain\". This is strongly supported by the ITIL 4 Foundation guidance on p.67 (CHAPTER 4)."
  },
  {
    "id": 48,
    "question": "Which practice recommends the use of event-based surveys to gather feedback from customers?",
    "options": [
      "Service level management",
      "Change enablement",
      "Service request management",
      "Problem management"
    ],
    "answer": 0,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: A — \"Service level management\". This is strongly supported by the ITIL 4 Foundation guidance on p.165 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 49,
    "question": "Which statement about change authorities is CORRECT?",
    "options": [
      "Change authorities are only required for authorizing emergency changes",
      "Change authorities are assigned when each change is deployed",
      "Change authorities are only required for authorizing normal changes",
      "Change authorities are assigned for each type of change and change model"
    ],
    "answer": 3,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: D — \"Change authorities are assigned for each type of change and change model\". This is strongly supported by the ITIL 4 Foundation guidance on p.193 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 50,
    "question": "Which practice improves customer and user satisfaction by reducing the negative impact of service interruptions?",
    "options": [
      "Service request management",
      "Service level management",
      "Incident management",
      "Change enablement"
    ],
    "answer": 2,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: C — \"Incident management\". This is strongly supported by the ITIL 4 Foundation guidance on p.197 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 51,
    "question": "Which will NOT be handled as a service request?",
    "options": [
      "The degradation of a service",
      "The replacement of a toner cartridge",
      "The provision of a laptop",
      "A complaint about a support team"
    ],
    "answer": 0,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: A — \"The degradation of a service\". This is strongly supported by the ITIL 4 Foundation guidance on p.166 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 52,
    "question": "A service offering may include goods, access to resources, and service actions. Which is an example of a service action?",
    "options": [
      "A mobile phone enables a user to work remotely",
      "A password allows a user connect to a WiFi network",
      "A license allows a user to install a software product",
      "A service desk agent provides support to a user"
    ],
    "answer": 3,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: D — \"A service desk agent provides support to a user\". This is strongly supported by the ITIL 4 Foundation guidance on p.205 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 53,
    "question": "Which describes a CORRECT approach to change authorization?",
    "options": [
      "Changes included in the change schedule are pre-authorized and do not need additional authorization",
      "Normal changes should be assessed and authorized before they are deployed",
      "Emergency changes should be authorized by as many people as possible to reduce risk",
      "Normal changes are typically implemented as service requests and authorized by the service desk"
    ],
    "answer": 1,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: B — \"Normal changes should be assessed and authorized before they are deployed\". This is strongly supported by the ITIL 4 Foundation guidance on p.129 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 54,
    "question": "Which statement about a service value stream is CORRECT?",
    "options": [
      "It uses prescriptive inputs and outputs",
      "It is a value chain activity",
      "It integrates practices for a specific scenario",
      "It is used to provide governance"
    ],
    "answer": 2,
    "category": "The Service Value System & Service Value Chain",
    "explanation": "Correct answer: C — \"It integrates practices for a specific scenario\". This is strongly supported by the ITIL 4 Foundation guidance on p.69 (CHAPTER 4)."
  },
  {
    "id": 55,
    "question": "Which statement about outputs is CORRECT?",
    "options": [
      "They consist of several outcomes",
      "They capture customer demand for services",
      "They contribute to the achievement of outcomes",
      "They describe how the service performs"
    ],
    "answer": 2,
    "category": "The Four Dimensions of Service Management",
    "explanation": "Correct answer: C — \"They contribute to the achievement of outcomes\". This is supported by the ITIL 4 Foundation guidance on p.40 (Chapter 3 – The four dimensions of service management)."
  },
  {
    "id": 56,
    "question": "Which is an example of a business related measurement?",
    "options": [
      "The number of passengers checked in",
      "The average time to respond to change requests",
      "The average resolution time for incidents",
      "The number of problems resolved"
    ],
    "answer": 0,
    "category": "Key Concepts of Service Management",
    "explanation": "Correct answer: A — \"The number of passengers checked in\". This is strongly supported by the ITIL 4 Foundation guidance on p.21 (Chapter 2 – Key concepts of service management)."
  },
  {
    "id": 57,
    "question": "Which BEST describes the purpose of the 'improve' value chain activity?",
    "options": [
      "To organize a major improvement initiative into several smaller initiatives",
      "To make new and improved services and features available for use",
      "To ensure a shared understanding of the vision and improvement direction for all products and services",
      "To continually improve all products and services across all value chain activities"
    ],
    "answer": 3,
    "category": "The Service Value System & Service Value Chain",
    "explanation": "Correct answer: D — \"To continually improve all products and services across all value chain activities\". This is strongly supported by the ITIL 4 Foundation guidance on p.72 (CHAPTER 4)."
  },
  {
    "id": 58,
    "question": "Which includes governance, management practices, and continual improvement?",
    "options": [
      "The service value system",
      "The 'deliver and support' value chain activity",
      "The 'focus on value' guiding principle",
      "The 'value stream and processes' dimension"
    ],
    "answer": 0,
    "category": "The 7 Guiding Principles",
    "explanation": "Correct answer: A — \"The service value system\". This is strongly supported by the ITIL 4 Foundation guidance on p.195 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 59,
    "question": "What is the definition of a problem?",
    "options": [
      "An unplanned interruption to a service, or reduction in the quality of a service",
      "A cause, or potential cause, of one or more incidents",
      "An incident for which a full resolution is not yet available",
      "Any change of state that has significance for the management of a configuration item (CI)"
    ],
    "answer": 1,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: B — \"A cause, or potential cause, of one or more incidents\". This is strongly supported by the ITIL 4 Foundation guidance on p.201 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 60,
    "question": "Which practice provides a communications point for users to report operational issues, queries and requests?",
    "options": [
      "Incident management",
      "Continual improvement",
      "Service desk",
      "Relationship management"
    ],
    "answer": 2,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: C — \"Service desk\". This is strongly supported by the ITIL 4 Foundation guidance on p.159 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 61,
    "question": "Which dimension is MOST concerned with skills, competencies, roles and responsibilities?",
    "options": [
      "Organizations and people",
      "Information and technology",
      "Partners and suppliers",
      "Value streams and processes"
    ],
    "answer": 0,
    "category": "The Four Dimensions of Service Management",
    "explanation": "Correct answer: A — \"Organizations and people\". This is strongly supported by the ITIL 4 Foundation guidance on p.200 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 62,
    "question": "An organization asks a stakeholder to review a planned change. Which guiding principle does this demonstrate?",
    "options": [
      "Collaborate and promote visibility",
      "Start where you are",
      "Focus on value",
      "Keep it simple and practical"
    ],
    "answer": 0,
    "category": "The 7 Guiding Principles",
    "explanation": "Correct answer: A — \"Collaborate and promote visibility\". This is strongly supported by the ITIL 4 Foundation guidance on p.59 (CHAPTER 4)."
  },
  {
    "id": 63,
    "question": "Which practice has a strong influence on the user experience and perception of the service provider?",
    "options": [
      "Service desk",
      "Change enablement",
      "Service level management",
      "Supplier management"
    ],
    "answer": 0,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: A — \"Service desk\". This is strongly supported by the ITIL 4 Foundation guidance on p.160 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 64,
    "question": "Which statement about service requests is CORRECT?",
    "options": [
      "Complex service requests should be dealt with as normal changes",
      "Service requests that require simple workflows should be dealt with as incidents",
      "Service requests require workflows that should use manual procedures and avoid automation",
      "Service requests are usually formalized using standard procedures for initiation, approval and fulfilment"
    ],
    "answer": 3,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: D — \"Service requests are usually formalized using standard procedures for initiation, approval and fulfilment\". This is strongly supported by the ITIL 4 Foundation guidance on p.166 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 65,
    "question": "Which practice is responsible for moving new or changed components to live or other environments?",
    "options": [
      "Release management",
      "Deployment management",
      "Change enablement",
      "Supplier management"
    ],
    "answer": 1,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: B — \"Deployment management\". This is strongly supported by the ITIL 4 Foundation guidance on p.195 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 66,
    "question": "Which dimension focuses on relationships with other organizations that are involved in the design, development, deployment and delivery of services?",
    "options": [
      "Organizations and people",
      "Information and technology",
      "Partners and suppliers",
      "Value streams and processes"
    ],
    "answer": 2,
    "category": "The Four Dimensions of Service Management",
    "explanation": "Correct answer: C — \"Partners and suppliers\". This is strongly supported by the ITIL 4 Foundation guidance on p.40 (Chapter 3 – The four dimensions of service management)."
  },
  {
    "id": 67,
    "question": "Which of these activities is carried out as part of 'problem management'?",
    "options": [
      "Creating incident records",
      "Diagnosing and resolving incidents",
      "Escalating incidents to a support team for resolution",
      "Trend analysis of incident records"
    ],
    "answer": 3,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: D — \"Trend analysis of incident records\". This is strongly supported by the ITIL 4 Foundation guidance on p.141 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 68,
    "question": "What must always be done before an activity is automated?",
    "options": [
      "Check that the activity has already been optimized",
      "Check that suitable new technology has been purchased",
      "Ensure that DevOps has been successfully implemented",
      "Ensure the solution removes the need for human intervention"
    ],
    "answer": 0,
    "category": "The Service Value System & Service Value Chain",
    "explanation": "Correct answer: A — \"Check that the activity has already been optimized\". This is strongly supported by the ITIL 4 Foundation guidance on p.52 (CHAPTER 4)."
  },
  {
    "id": 69,
    "question": "What is a change schedule PRIMARILY used for?",
    "options": [
      "To help plan emergency changes",
      "To help authorize standard changes",
      "To help assign a change authority",
      "To help manage normal changes"
    ],
    "answer": 3,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: D — \"To help manage normal changes\". This is strongly supported by the ITIL 4 Foundation guidance on p.129 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 70,
    "question": "Which role approves the cost of services?",
    "options": [
      "User",
      "Change authority",
      "Sponsor",
      "Customer"
    ],
    "answer": 2,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: C — \"Sponsor\". This is strongly supported by the ITIL 4 Foundation guidance on p.206 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 71,
    "question": "What actions does a service desk take for all issues, queries and requests that are reported to them?",
    "options": [
      "Schedule, assess, authorize",
      "Diagnose, investigate, resolve",
      "Initiate, approve, fulfil",
      "Acknowledge, classify, own"
    ],
    "answer": 3,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: D — \"Acknowledge, classify, own\". This is supported by the ITIL 4 Foundation guidance on p.159 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 72,
    "question": "Which describes the utility of a service?",
    "options": [
      "A service that is fit for use",
      "A service that meets its service level targets",
      "A service that increases constraints on the consumer",
      "A service that supports the performance of the consumer"
    ],
    "answer": 3,
    "category": "Key Concepts of Service Management",
    "explanation": "Correct answer: D — \"A service that supports the performance of the consumer\". This is strongly supported by the ITIL 4 Foundation guidance on p.207 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 73,
    "question": "Which is included in the purpose of the 'service level management' practice?",
    "options": [
      "To maximize the number of successful service and product changes",
      "To ensure accurate information about the configuration of services is available",
      "To set clear business-based targets for service levels",
      "To ensure that suppliers and their performance are managed appropriately"
    ],
    "answer": 2,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: C — \"To set clear business-based targets for service levels\". This is strongly supported by the ITIL 4 Foundation guidance on p.162 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 74,
    "question": "Which usually requires a team of representatives from many stakeholder groups?",
    "options": [
      "Fulfilling a service request",
      "Authorizing an emergency change",
      "Logging a new problem",
      "Investigating a major incident"
    ],
    "answer": 3,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: D — \"Investigating a major incident\". This is strongly supported by the ITIL 4 Foundation guidance on p.132 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 75,
    "question": "Which value chain activity ensures that service components meet agreed specifications?",
    "options": [
      "Plan",
      "Design and transition",
      "Obtain/build",
      "Deliver and support"
    ],
    "answer": 2,
    "category": "The Service Value System & Service Value Chain",
    "explanation": "Correct answer: C — \"Obtain/build\". This is strongly supported by the ITIL 4 Foundation guidance on p.200 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 76,
    "question": "What includes governance as a component?",
    "options": [
      "Practices",
      "The service value chain",
      "The service value system",
      "The guiding principles"
    ],
    "answer": 2,
    "category": "The 7 Guiding Principles",
    "explanation": "Correct answer: C — \"The service value system\". This is strongly supported by the ITIL 4 Foundation guidance on p.195 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 77,
    "question": "Which practice needs people who understand complex systems and have creative and analytical skills?",
    "options": [
      "Change enablement",
      "Service level management",
      "Service request management",
      "Problem management"
    ],
    "answer": 3,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: D — \"Problem management\". This is strongly supported by the ITIL 4 Foundation guidance on p.142 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 78,
    "question": "What is the definition of a known error?",
    "options": [
      "An unplanned interruption to a service, or reduction in the quality of a service",
      "A cause, or potential cause, of one or more incident",
      "A problem that has been analyzed and has not been resolved",
      "Any change of state that has significance for the management of a service or other configuration item (CI)"
    ],
    "answer": 2,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: C — \"A problem that has been analyzed and has not been resolved\". This is strongly supported by the ITIL 4 Foundation guidance on p.140 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 79,
    "question": "Which guiding principle is PRIMARILY concerned with end-to-end service delivery?",
    "options": [
      "Focus on value",
      "Think and work holistically",
      "Optimize and automate",
      "Collaborate and promote visibility"
    ],
    "answer": 1,
    "category": "The 7 Guiding Principles",
    "explanation": "Correct answer: B — \"Think and work holistically\". This is strongly supported by the ITIL 4 Foundation guidance on p.62 (CHAPTER 4)."
  },
  {
    "id": 80,
    "question": "What are typically recognized through notifications created by an IT service, CI or monitoring tool?",
    "options": [
      "Incidents",
      "Problems",
      "Events",
      "Requests"
    ],
    "answer": 2,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: C — \"Events\". This is strongly supported by the ITIL 4 Foundation guidance on p.138 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 81,
    "question": "Which dimension considers data security and privacy?",
    "options": [
      "Organizations and people",
      "Information and technology",
      "Partners and suppliers",
      "Value streams and processes"
    ],
    "answer": 1,
    "category": "The Four Dimensions of Service Management",
    "explanation": "Correct answer: B — \"Information and technology\". This is strongly supported by the ITIL 4 Foundation guidance on p.36 (Chapter 3 – The four dimensions of service management)."
  },
  {
    "id": 82,
    "question": "Which term relates to service levels aligned with the needs of service consumers?",
    "options": [
      "Service management",
      "Warranty",
      "Cost",
      "Utility"
    ],
    "answer": 1,
    "category": "Key Concepts of Service Management",
    "explanation": "Correct answer: B — \"Warranty\". This is strongly supported by the ITIL 4 Foundation guidance on p.208 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 83,
    "question": "Which directly assists with the diagnosis and resolution of simple incidents?",
    "options": [
      "Scripts for collecting user information",
      "Use of shift working patterns",
      "Fulfilment of service requests",
      "Creation of a temporary team"
    ],
    "answer": 0,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: A — \"Scripts for collecting user information\". This is strongly supported by the ITIL 4 Foundation guidance on p.133 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 84,
    "question": "What are guiding principles?",
    "options": [
      "A set of interconnected activities that help an organization deliver a valuable service",
      "A description of one or more services that help address the needs of a target consumer group",
      "A set of specialized organizational capabilities for enabling value for customers",
      "Recommendations that help an organization when adopting a service management approach"
    ],
    "answer": 3,
    "category": "The 7 Guiding Principles",
    "explanation": "Correct answer: D — \"Recommendations that help an organization when adopting a service management approach\". This is strongly supported by the ITIL 4 Foundation guidance on p.198 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 85,
    "question": "Which approach is CORRECT when applying the guiding principle 'keep it simple and practical'?",
    "options": [
      "Only add controls and metrics when they are needed",
      "Design controls and metrics first, then remove those not adding value",
      "Design controls and metrics and add them individually until all are implemented",
      "Only add controls and metrics that are required for compliance"
    ],
    "answer": 1,
    "category": "The 7 Guiding Principles",
    "explanation": "Correct answer: B — \"Design controls and metrics first, then remove those not adding value\". This is supported by the ITIL 4 Foundation guidance on p.66 (CHAPTER 4)."
  },
  {
    "id": 86,
    "question": "What is the purpose of the 'problem management' practice?",
    "options": [
      "To protect the information needed by the organization to conduct its business",
      "To reduce the likelihood and impact of incidents by identifying actual and potential causes of incidents, and managing workarounds and known errors",
      "To align the organization's practices and services with changing business needs through the ongoing identification and improvement of services",
      "To minimize the negative impact of incidents by restoring normal service operation as quickly as possible"
    ],
    "answer": 1,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: B — \"To reduce the likelihood and impact of incidents by identifying actual and potential causes of incidents, and managing workarounds and known errors\". This is strongly supported by the ITIL 4 Foundation guidance on p.140 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 87,
    "question": "Which practice forms a link between the service provider and the users of services?",
    "options": [
      "Change enablement",
      "Service level management",
      "Problem management",
      "Service desk"
    ],
    "answer": 3,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: D — \"Service desk\". This is strongly supported by the ITIL 4 Foundation guidance on p.204 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 88,
    "question": "Which is a purpose of release management?",
    "options": [
      "To protect the organization's information",
      "To handle user-initiated service requests",
      "To make new and changed services available for use",
      "To move hardware and software to live environments"
    ],
    "answer": 2,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: C — \"To make new and changed services available for use\". This is strongly supported by the ITIL 4 Foundation guidance on p.144 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 89,
    "question": "What is recommended by the guiding principle 'progress iteratively with feedback'?",
    "options": [
      "A current state assessment that is carried out at the start of an improvement initiative",
      "The identification of all interested parts at the start of an improvement initiative",
      "An improvement initiative that is broken into a number of manageable sections",
      "An assessment of how all the parts of an organization will affect an improvement initiative"
    ],
    "answer": 2,
    "category": "The 7 Guiding Principles",
    "explanation": "Correct answer: C — \"An improvement initiative that is broken into a number of manageable sections\". This is strongly supported by the ITIL 4 Foundation guidance on p.57 (CHAPTER 4)."
  },
  {
    "id": 90,
    "question": "Which guiding principle considers customer and user experience?",
    "options": [
      "Collaborate and promote visibility",
      "Focus on value",
      "Start where you are",
      "Keep it simple and practical"
    ],
    "answer": 1,
    "category": "The 7 Guiding Principles",
    "explanation": "Correct answer: B — \"Focus on value\". This is strongly supported by the ITIL 4 Foundation guidance on p.49 (CHAPTER 4)."
  },
  {
    "id": 91,
    "question": "Which statement about the 'change enablement' practice is CORRECT?",
    "options": [
      "Service requests are usually normal changes that can be implemented quickly without authorization",
      "Emergency changes are changes that must be fully tested and fully documented prior to implementation",
      "Standard changes are changes that need to be scheduled, assessed and authorized following a standard process",
      "Emergency changes are changes that must be implemented as soon as possible and therefore authorization is expedited"
    ],
    "answer": 3,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: D — \"Emergency changes are changes that must be implemented as soon as possible and therefore authorization is expedited\". This is strongly supported by the ITIL 4 Foundation guidance on p.129 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 92,
    "question": "Which is a key activity carried out in the 'did we get there?' step of the 'continual improvement' model?",
    "options": [
      "Define measurable targets",
      "Perform baseline assessments",
      "Execute improvement actions",
      "Evaluate measurements and metrics"
    ],
    "answer": 3,
    "category": "The Service Value System & Service Value Chain",
    "explanation": "Correct answer: D — \"Evaluate measurements and metrics\". This is supported by the ITIL 4 Foundation guidance on p.81 (CHAPTER 4)."
  },
  {
    "id": 93,
    "question": "What can a service remove from the consumer and impose on the consumer?",
    "options": [
      "Utility",
      "Asset",
      "Cost",
      "Outcome"
    ],
    "answer": 2,
    "category": "Key Concepts of Service Management",
    "explanation": "Correct answer: C — \"Cost\". This is strongly supported by the ITIL 4 Foundation guidance on p.28 (Chapter 2 – Key concepts of service management)."
  },
  {
    "id": 94,
    "question": "What does 'change enablement' PRIMARILY focus on?",
    "options": [
      "Changes to service levels",
      "Changes to products and services",
      "Changes to organizational structure",
      "Changes to skills and competencies"
    ],
    "answer": 1,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: B — \"Changes to products and services\". This is strongly supported by the ITIL 4 Foundation guidance on p.177 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 95,
    "question": "Which is handled as a service request?",
    "options": [
      "An investigation to identify the cause of an incident",
      "A compliment about an IT support team",
      "The failure of an IT service",
      "An emergency change to implement a security patch"
    ],
    "answer": 1,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: B — \"A compliment about an IT support team\". This is strongly supported by the ITIL 4 Foundation guidance on p.207 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 96,
    "question": "Which is a key requirement for a successful service level agreement (SLA)?",
    "options": [
      "Using individual metrics that relate to the service catalogue",
      "Using bundled metrics to relate performance to outcomes",
      "Using single-system-based metrics that relate to outputs",
      "Using an agreement between the service provider and service supplier"
    ],
    "answer": 1,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: B — \"Using bundled metrics to relate performance to outcomes\". This is strongly supported by the ITIL 4 Foundation guidance on p.205 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 97,
    "question": "Which is considered by the 'partners and suppliers' dimension?",
    "options": [
      "Using artificial intelligence",
      "Defining controls and procedures",
      "Using formal roles and responsibilities",
      "Working with an integrator to manage relationships"
    ],
    "answer": 3,
    "category": "The Four Dimensions of Service Management",
    "explanation": "Correct answer: D — \"Working with an integrator to manage relationships\". This is supported by the ITIL 4 Foundation guidance on p.117 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 98,
    "question": "Which practice recommends using tools for collaboration and the automated matching of symptoms?",
    "options": [
      "Problem management",
      "Service level management",
      "Incident management",
      "Service request management"
    ],
    "answer": 2,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: C — \"Incident management\". This is strongly supported by the ITIL 4 Foundation guidance on p.132 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 99,
    "question": "Which practice would help a user gain access to an application that they need to use?",
    "options": [
      "Service configuration management",
      "Change enablement",
      "Service request management",
      "Service level management"
    ],
    "answer": 2,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: C — \"Service request management\". This is strongly supported by the ITIL 4 Foundation guidance on p.167 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 100,
    "question": "What is used to link activities within the service value chain?",
    "options": [
      "Service level agreements",
      "Inputs, outputs and triggers",
      "Opportunity, demand and value",
      "Service desk"
    ],
    "answer": 1,
    "category": "The Service Value System & Service Value Chain",
    "explanation": "Correct answer: B — \"Inputs, outputs and triggers\". This is strongly supported by the ITIL 4 Foundation guidance on p.68 (CHAPTER 4)."
  },
  {
    "id": 101,
    "question": "Which TWO practices use workarounds?",
    "options": [
      "Change enablement and continual improvement",
      "Change enablement and problem management",
      "Problem management and incident management",
      "Incident management and continual improvement"
    ],
    "answer": 2,
    "category": "The Four Dimensions of Service Management",
    "explanation": "Correct answer: C — \"Problem management and incident management\". This is strongly supported by the ITIL 4 Foundation guidance on p.39 (Chapter 3 – The four dimensions of service management)."
  },
  {
    "id": 102,
    "question": "Which is included in the purpose of the 'deliver and support' value chain activity?",
    "options": [
      "Meeting stakeholder expectations for time to market",
      "Understanding the organization's service vision",
      "Understanding stakeholder needs",
      "Providing services to agreed specifications"
    ],
    "answer": 3,
    "category": "The Service Value System & Service Value Chain",
    "explanation": "Correct answer: D — \"Providing services to agreed specifications\". This is strongly supported by the ITIL 4 Foundation guidance on p.75 (CHAPTER 4)."
  },
  {
    "id": 103,
    "question": "Which are elements of the service value system?",
    "options": [
      "Service provision, service consumption, service relationship management",
      "Governance, service value chain, practices",
      "Outcomes, utility, warranty",
      "Customer value, stakeholder value, organization"
    ],
    "answer": 1,
    "category": "Key Concepts of Service Management",
    "explanation": "Correct answer: B — \"Governance, service value chain, practices\". This is strongly supported by the ITIL 4 Foundation guidance on p.46 (CHAPTER 4)."
  },
  {
    "id": 104,
    "question": "What is an incident?",
    "options": [
      "The planned removal of an item that might affect a service",
      "A result enabled by one or more outputs",
      "A possible future event that could cause harm",
      "A service interruption resolved by the use of self-help tools"
    ],
    "answer": 3,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: D — \"A service interruption resolved by the use of self-help tools\". This is strongly supported by the ITIL 4 Foundation guidance on p.132 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 105,
    "question": "What is defined as a change of state that has significance for the management of an IT service?",
    "options": [
      "Event",
      "Incident",
      "Problem",
      "Known error"
    ],
    "answer": 0,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: A — \"Event\". This is strongly supported by the ITIL 4 Foundation guidance on p.196 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 106,
    "question": "Which dimension includes the knowledge needed for the management of services?",
    "options": [
      "Organizations and people",
      "Information and technology",
      "Partners and suppliers",
      "Value streams and processes"
    ],
    "answer": 1,
    "category": "The Four Dimensions of Service Management",
    "explanation": "Correct answer: B — \"Information and technology\". This is strongly supported by the ITIL 4 Foundation guidance on p.36 (Chapter 3 – The four dimensions of service management)."
  },
  {
    "id": 107,
    "question": "What is the PRIMARY use of a change schedule?",
    "options": [
      "To support the 'incident management' practice and improvement planning",
      "To manage emergency changes",
      "To plan changes and help avoid conflicts",
      "To manage standard changes"
    ],
    "answer": 2,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: C — \"To plan changes and help avoid conflicts\". This is strongly supported by the ITIL 4 Foundation guidance on p.130 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 108,
    "question": "Which guiding principle focuses on reducing costs and human errors?",
    "options": [
      "Focus on value",
      "Collaborate and promote visibility",
      "Optimize and automate",
      "Think and work holistically"
    ],
    "answer": 2,
    "category": "The 7 Guiding Principles",
    "explanation": "Correct answer: C — \"Optimize and automate\". This is strongly supported by the ITIL 4 Foundation guidance on p.65 (CHAPTER 4)."
  },
  {
    "id": 109,
    "question": "Which guiding principle helps to ensure that each improvement effort has more focus and is easier to maintain?",
    "options": [
      "Start where you are",
      "Collaborate and promote visibility",
      "Progress iteratively with feedback",
      "Think and work holistically"
    ],
    "answer": 2,
    "category": "The 7 Guiding Principles",
    "explanation": "Correct answer: C — \"Progress iteratively with feedback\". This is strongly supported by the ITIL 4 Foundation guidance on p.57 (CHAPTER 4)."
  },
  {
    "id": 110,
    "question": "Which is a key activity carried out in the 'did we get there?' step of the 'continual improvement' model?",
    "options": [
      "Define measurable targets",
      "Perform baseline assessments",
      "Execute improvement actions",
      "Evaluate measurements and metrics"
    ],
    "answer": 3,
    "category": "The Service Value System & Service Value Chain",
    "explanation": "Correct answer: D — \"Evaluate measurements and metrics\". This is supported by the ITIL 4 Foundation guidance on p.81 (CHAPTER 4)."
  },
  {
    "id": 111,
    "question": "What is important for a 'continual improvement register' (CIR)?",
    "options": [
      "Improvement ideas are documented, assessed and prioritized",
      "Improvement ideas from many sources are kept in a single CIR",
      "Improvement ideas that are not being actioned immediately are removed from the CIR",
      "Improvement ideas are tested, funded and agreed"
    ],
    "answer": 0,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: A — \"Improvement ideas are documented, assessed and prioritized\". This is strongly supported by the ITIL 4 Foundation guidance on p.92 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 112,
    "question": "Which is a purpose of the 'service level management' practice?",
    "options": [
      "To establish and nurture the links between the organization and its stakeholders",
      "To ensure that the organization's suppliers and their performance are managed appropriately",
      "To support the agreed quality of a service by handling all agreed, user-initiated service requests",
      "To set clear business-based targets for service levels"
    ],
    "answer": 3,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: D — \"To set clear business-based targets for service levels\". This is strongly supported by the ITIL 4 Foundation guidance on p.162 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 113,
    "question": "What describes the steps needed to create and deliver a specific service to a consumer?",
    "options": [
      "Service management",
      "Practices",
      "A value stream",
      "Service level management"
    ],
    "answer": 2,
    "category": "The Four Dimensions of Service Management",
    "explanation": "Correct answer: C — \"A value stream\". This is strongly supported by the ITIL 4 Foundation guidance on p.42 (Chapter 3 – The four dimensions of service management)."
  },
  {
    "id": 114,
    "question": "Which helps to manage an incident when it is unclear which support team should be working on the incident?",
    "options": [
      "Disaster recovery plans",
      "Swarming",
      "Target resolution times",
      "Self-help"
    ],
    "answer": 1,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: B — \"Swarming\". This is strongly supported by the ITIL 4 Foundation guidance on p.132 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 115,
    "question": "Which statement about the 'continual improvement' practice is CORRECT?",
    "options": [
      "Continual improvement participation should be limited to a small dedicated team",
      "It is the role of senior management to authorize improvement initiatives",
      "Training should be provided to those involved in continual improvement",
      "A single continual improvement register should be maintained by senior management"
    ],
    "answer": 1,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: B — \"It is the role of senior management to authorize improvement initiatives\". This is supported by the ITIL 4 Foundation guidance on p.93 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 116,
    "question": "Which does the ITIL service value system discourage?",
    "options": [
      "Coordinated authorities and responsibilities",
      "Organizational silos",
      "Interfaces among practices",
      "Organizational agility"
    ],
    "answer": 1,
    "category": "The Service Value System & Service Value Chain",
    "explanation": "Correct answer: B — \"Organizational silos\". This is strongly supported by the ITIL 4 Foundation guidance on p.47 (CHAPTER 4)."
  },
  {
    "id": 117,
    "question": "An SLA is a service level agreement. Which describes the 'watermelon SLA' effect?",
    "options": [
      "A single SLA defines target service levels for multiple customers, so every customer sees reports about other customers' experiences",
      "The metrics in an SLA are focused on internal measures, so that reports show everything is good, while the customer is not satisfied",
      "SLA targets change very frequently, so that each report includes new measures and trends cannot be analyzed",
      "Introducing SLAs for a service enables customers to see that the service provider is doing a really good job, so this improves satisfaction"
    ],
    "answer": 1,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: B — \"The metrics in an SLA are focused on internal measures, so that reports show everything is good, while the customer is not satisfied\". This is strongly supported by the ITIL 4 Foundation guidance on p.205 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 118,
    "question": "Which practice includes conducting regular reviews to ensure that services are still appropriate and relevant?",
    "options": [
      "Service level management",
      "Service desk",
      "Continual improvement",
      "Change enablement"
    ],
    "answer": 0,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: A — \"Service level management\". This is strongly supported by the ITIL 4 Foundation guidance on p.165 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 119,
    "question": "What is a service?",
    "options": [
      "A possible event that could cause harm or loss, or make it more difficult to achieve objectives",
      "A means of enabling value co-creation by facilitating outcomes that customers want to achieve, without the customer having to manage specific costs and risks",
      "A tangible or intangible deliverable of an activity",
      "Joint activities performed by a service provider and a service consumer to ensure continual value co-creation based on agreed and available service offerings"
    ],
    "answer": 1,
    "category": "Key Concepts of Service Management",
    "explanation": "Correct answer: B — \"A means of enabling value co-creation by facilitating outcomes that customers want to achieve, without the customer having to manage specific costs and risks\". This is strongly supported by the ITIL 4 Foundation guidance on p.204 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 120,
    "question": "Which TWO are important aspects of the 'service request management' practice? 1. Standardization and automation 2. Providing a variety of channels for access 3. Establishing a shared view of targets 4. Policies for approvals",
    "options": [
      "1 and 2",
      "2 and 3",
      "3 and 4",
      "1 and 4"
    ],
    "answer": 3,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: D — \"1 and 4\". This is supported by the ITIL 4 Foundation guidance on p.160 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 121,
    "question": "What is required by all service desk staff?",
    "options": [
      "Excellent technical knowledge",
      "Root cause analysis skills",
      "Demonstration of emotional intelligence",
      "Knowledge of telephony technology"
    ],
    "answer": 2,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: C — \"Demonstration of emotional intelligence\". This is strongly supported by the ITIL 4 Foundation guidance on p.161 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 122,
    "question": "Which practice establishes a channel between the service provider and its users?",
    "options": [
      "Relationship management",
      "Change enablement",
      "Supplier management",
      "Service desk"
    ],
    "answer": 3,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: D — \"Service desk\". This is strongly supported by the ITIL 4 Foundation guidance on p.204 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 123,
    "question": "Which practice includes the use of approaches such as Lean, Agile and DevOps with the aim of facilitating a greater amount of change at a quicker rate?",
    "options": [
      "Service desk",
      "Monitoring and event management",
      "Service level management",
      "Continual improvement"
    ],
    "answer": 3,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: D — \"Continual improvement\". This is strongly supported by the ITIL 4 Foundation guidance on p.93 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 124,
    "question": "Which practice has a purpose that includes maximizing success by ensuring that risks have been properly assessed?",
    "options": [
      "Relationship management",
      "Change enablement",
      "Release management",
      "Monitoring and event management"
    ],
    "answer": 1,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: B — \"Change enablement\". This is strongly supported by the ITIL 4 Foundation guidance on p.128 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 125,
    "question": "Which practice provides users with a way to get various requests arranged, explained and coordinated?",
    "options": [
      "Service level management",
      "Relationship management",
      "Continual improvement",
      "Service desk"
    ],
    "answer": 3,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: D — \"Service desk\". This is strongly supported by the ITIL 4 Foundation guidance on p.159 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 126,
    "question": "Which helps to streamline the fulfilment of service requests?",
    "options": [
      "Understanding which service requests can be accomplished with limited approvals",
      "Creating new workflows for every service request",
      "Separating requests relating to service failures from the degradation of services",
      "Eliminating service requests which have complex workflows"
    ],
    "answer": 0,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: A — \"Understanding which service requests can be accomplished with limited approvals\". This is strongly supported by the ITIL 4 Foundation guidance on p.166 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 127,
    "question": "Which statement about outcomes is CORRECT?",
    "options": [
      "They are deliverables provided to service consumers",
      "They allow service consumers to achieve a desired result",
      "They provide products to service providers based on outputs",
      "They co-create value for service providers by reducing costs and risks"
    ],
    "answer": 1,
    "category": "Key Concepts of Service Management",
    "explanation": "Correct answer: B — \"They allow service consumers to achieve a desired result\". This is strongly supported by the ITIL 4 Foundation guidance on p.26 (Chapter 2 – Key concepts of service management)."
  },
  {
    "id": 128,
    "question": "Which guiding principle says that services and processes should NOT provide a solution for every exception?",
    "options": [
      "Keep it simple and practical",
      "Collaborate and promote visibility",
      "Think and work holistically",
      "Optimize and automate"
    ],
    "answer": 0,
    "category": "The 7 Guiding Principles",
    "explanation": "Correct answer: A — \"Keep it simple and practical\". This is strongly supported by the ITIL 4 Foundation guidance on p.63 (CHAPTER 4)."
  },
  {
    "id": 129,
    "question": "Identify the missing word in the following sentence. The purpose of the 'supplier management' practice is to ensure that the organization’s suppliers and their performances are [?] appropriately to support the seamless provision of quality products and services.",
    "options": [
      "measured",
      "rewarded",
      "managed",
      "defined"
    ],
    "answer": 2,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: C — \"managed\". This is strongly supported by the ITIL 4 Foundation guidance on p.115 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 130,
    "question": "Identify the missing words in the following sentence. The purpose of the service configuration management practice is to ensure that accurate and reliable information about the [?], and the CIs that support them, is available when and where it is needed.",
    "options": [
      "relationships with suppliers",
      "configuration of services",
      "skills of people",
      "authorization of changes"
    ],
    "answer": 1,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: B — \"configuration of services\". This is strongly supported by the ITIL 4 Foundation guidance on p.204 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 131,
    "question": "Which practice requires skills and competencies related to business analysis, supplier management and relationship management?",
    "options": [
      "Incident management",
      "Monitoring and event management",
      "Service level management",
      "IT asset management"
    ],
    "answer": 2,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: C — \"Service level management\". This is strongly supported by the ITIL 4 Foundation guidance on p.162 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 132,
    "question": "When should a workaround be created?",
    "options": [
      "As soon as possible, once the incident is logged",
      "After the resolution of a problem",
      "When a problem cannot be resolved quickly",
      "When a potential permanent solution has been identified"
    ],
    "answer": 2,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: C — \"When a problem cannot be resolved quickly\". This is strongly supported by the ITIL 4 Foundation guidance on p.141 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 133,
    "question": "What is a configuration item?",
    "options": [
      "Any financially valuable component that can contribute to the delivery of an IT product or service",
      "Any change of state that has significance for the management of a service",
      "Any component that needs to be managed in order to deliver an IT service",
      "A problem that has been analyzed but has not been resolved"
    ],
    "answer": 2,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: C — \"Any component that needs to be managed in order to deliver an IT service\". This is strongly supported by the ITIL 4 Foundation guidance on p.194 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 134,
    "question": "Identify the missing words in the following sentence. When an organization has decided to improve a service, it should start by considering [?].",
    "options": [
      "existing information",
      "new methods",
      "additional measurements",
      "revised processes"
    ],
    "answer": 0,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: A — \"existing information\". This is supported by the ITIL 4 Foundation guidance on p.206 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 135,
    "question": "Which is a use of the change schedule?",
    "options": [
      "Assigning resources to changes",
      "Deciding the approval authority for changes",
      "Automating the change process",
      "Creating change models"
    ],
    "answer": 0,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: A — \"Assigning resources to changes\". This is strongly supported by the ITIL 4 Foundation guidance on p.130 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 136,
    "question": "Which dimension of service management considers the workflows and controls needed to deliver services?",
    "options": [
      "Organizations and people",
      "Information and technology",
      "Partners and suppliers",
      "Value streams and processes"
    ],
    "answer": 3,
    "category": "The Four Dimensions of Service Management",
    "explanation": "Correct answer: D — \"Value streams and processes\". This is strongly supported by the ITIL 4 Foundation guidance on p.41 (Chapter 3 – The four dimensions of service management)."
  },
  {
    "id": 137,
    "question": "Which guiding principle considers how the steps of a process can be performed as efficiently as possible?",
    "options": [
      "Focus on value",
      "Start where you are",
      "Think and work holistically",
      "Optimize and automate"
    ],
    "answer": 3,
    "category": "The 7 Guiding Principles",
    "explanation": "Correct answer: D — \"Optimize and automate\". This is strongly supported by the ITIL 4 Foundation guidance on p.65 (CHAPTER 4)."
  },
  {
    "id": 138,
    "question": "Which statement about the 'incident management' practice is CORRECT?",
    "options": [
      "It identifies the cause of major incidents",
      "It authorizes changes to resolve incidents",
      "It maintains detailed procedures for diagnosing incidents",
      "It resolves the highest impact incidents first"
    ],
    "answer": 3,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: D — \"It resolves the highest impact incidents first\". This is strongly supported by the ITIL 4 Foundation guidance on p.197 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 139,
    "question": "How should an organization prioritize incidents?",
    "options": [
      "Ask the user for their preferred resolution timeframe",
      "Assess the availability of the appropriate support team",
      "Use an agreed classification which is based on the business impact of the incident",
      "Create an order of incidents based on the dates and times when they were logged"
    ],
    "answer": 2,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: C — \"Use an agreed classification which is based on the business impact of the incident\". This is strongly supported by the ITIL 4 Foundation guidance on p.131 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 140,
    "question": "Which is a purpose of the 'relationship management' practice?",
    "options": [
      "To systematically observe services and service components",
      "To protect the information needed by the organization to conduct its business",
      "To be the entry point and single point of contact for the service provider with all of its users",
      "To identify, analyze, monitor, and continually improve links with stakeholders"
    ],
    "answer": 3,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: D — \"To identify, analyze, monitor, and continually improve links with stakeholders\". This is strongly supported by the ITIL 4 Foundation guidance on p.106 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 141,
    "question": "Which statement about problems is CORRECT?",
    "options": [
      "Problems are not related to incidents",
      "Problems must be resolved quickly in order to restore normal business activity",
      "Problem analysis should focus on one of the four dimensions to achieve a fast diagnosis",
      "Problem prioritization involves risk assessment"
    ],
    "answer": 3,
    "category": "The Four Dimensions of Service Management",
    "explanation": "Correct answer: D — \"Problem prioritization involves risk assessment\". This is strongly supported by the ITIL 4 Foundation guidance on p.203 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 142,
    "question": "Which is a risk that might be removed from a service consumer by an IT service?",
    "options": [
      "Service provider ceasing to trade",
      "Security breach",
      "Failure of server hardware",
      "Cost of purchasing servers"
    ],
    "answer": 1,
    "category": "Key Concepts of Service Management",
    "explanation": "Correct answer: B — \"Security breach\". This is strongly supported by the ITIL 4 Foundation guidance on p.28 (Chapter 2 – Key concepts of service management)."
  },
  {
    "id": 143,
    "question": "Which is one of the MAIN concerns of the 'design and transition' value chain activity?",
    "options": [
      "Understanding the organization's vision",
      "Understanding stakeholder needs",
      "Meeting stakeholder expectations",
      "Ensuring service components are available"
    ],
    "answer": 2,
    "category": "The Service Value System & Service Value Chain",
    "explanation": "Correct answer: C — \"Meeting stakeholder expectations\". This is strongly supported by the ITIL 4 Foundation guidance on p.195 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 144,
    "question": "Which should be handled by 'service request management'?",
    "options": [
      "A request to implement a security patch",
      "A request to provide a laptop",
      "A request to resolve an error in a service",
      "A request to change a target in a service level agreement"
    ],
    "answer": 1,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: B — \"A request to provide a laptop\". This is strongly supported by the ITIL 4 Foundation guidance on p.166 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 145,
    "question": "What can be described as an operating model for the creation and management of products and services?",
    "options": [
      "Governance",
      "Service value chain",
      "Guiding principles",
      "Practices"
    ],
    "answer": 1,
    "category": "The 7 Guiding Principles",
    "explanation": "Correct answer: B — \"Service value chain\". This is strongly supported by the ITIL 4 Foundation guidance on p.67 (CHAPTER 4)."
  },
  {
    "id": 146,
    "question": "Which action is performed by a service provider?",
    "options": [
      "Requesting required service actions",
      "Authorizing budget for service consumption",
      "Ensuring access to agreed resources",
      "Receiving of the agreed goods"
    ],
    "answer": 2,
    "category": "Key Concepts of Service Management",
    "explanation": "Correct answer: C — \"Ensuring access to agreed resources\". This is strongly supported by the ITIL 4 Foundation guidance on p.205 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 147,
    "question": "Which step of the continual improvement model includes baseline assessments?",
    "options": [
      "Did we get there?",
      "Where are we now?",
      "What is the vision?",
      "Where do we want to be?"
    ],
    "answer": 1,
    "category": "The Service Value System & Service Value Chain",
    "explanation": "Correct answer: B — \"Where are we now?\". This is strongly supported by the ITIL 4 Foundation guidance on p.79 (CHAPTER 4)."
  },
  {
    "id": 148,
    "question": "Which describes a 'change authority'?",
    "options": [
      "A model used to determine who will assess a change",
      "A person who approves a change",
      "A tool used to help plan changes",
      "A way to manage the people aspects of change"
    ],
    "answer": 1,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: B — \"A person who approves a change\". This is strongly supported by the ITIL 4 Foundation guidance on p.193 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 149,
    "question": "Which is NOT a component of the service value system?",
    "options": [
      "The service value chain",
      "Opportunity and demand",
      "Continual improvement",
      "Governance"
    ],
    "answer": 1,
    "category": "The Service Value System & Service Value Chain",
    "explanation": "Correct answer: B — \"Opportunity and demand\". This is strongly supported by the ITIL 4 Foundation guidance on p.48 (CHAPTER 4)."
  },
  {
    "id": 150,
    "question": "Which statement about service relationship management is CORRECT?",
    "options": [
      "It focuses on the service actions performed by users",
      "It requires the service consumer to create resources for the service provider",
      "It requires co-operation of both the service provider and service consumer",
      "It focuses on the fulfilment of the agreed service actions"
    ],
    "answer": 2,
    "category": "Key Concepts of Service Management",
    "explanation": "Correct answer: C — \"It requires co-operation of both the service provider and service consumer\". This is strongly supported by the ITIL 4 Foundation guidance on p.205 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 151,
    "question": "What is the MOST important reason for prioritizing incidents?",
    "options": [
      "To ensure that user expectations are realistic",
      "To ensure that incidents with highest impact are resolved first",
      "To help information-sharing and learning",
      "To provide links to related changes and known errors"
    ],
    "answer": 1,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: B — \"To ensure that incidents with highest impact are resolved first\". This is strongly supported by the ITIL 4 Foundation guidance on p.131 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 152,
    "question": "Which 'service level management' activity helps staff to deliver a more business-focused service?",
    "options": [
      "Creating targets based on the percentage of uptime of a service",
      "Understanding the ongoing requirements of customers",
      "Using complex technical terminology in service level agreements (SLAs)",
      "Measuring low-level operational activities"
    ],
    "answer": 1,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: B — \"Understanding the ongoing requirements of customers\". This is strongly supported by the ITIL 4 Foundation guidance on p.163 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 153,
    "question": "Which practice has a purpose that includes the handling of pre-defined, user-initiated demands for service?",
    "options": [
      "Service request management",
      "Service configuration management",
      "Deployment management",
      "Change enablement"
    ],
    "answer": 0,
    "category": "The Service Value System & Service Value Chain",
    "explanation": "Correct answer: A — \"Service request management\". This is strongly supported by the ITIL 4 Foundation guidance on p.166 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 154,
    "question": "Which guiding principle considers which parts of an existing process should be kept by identifying how they contribute to value creation?",
    "options": [
      "Progress iteratively with feedback",
      "Collaborate and promote visibility",
      "Think and work holistically",
      "Keep it simple and practical"
    ],
    "answer": 3,
    "category": "The 7 Guiding Principles",
    "explanation": "Correct answer: D — \"Keep it simple and practical\". This is strongly supported by the ITIL 4 Foundation guidance on p.63 (CHAPTER 4)."
  },
  {
    "id": 155,
    "question": "What is the purpose of the 'monitoring and event management' practice?",
    "options": [
      "To restore normal service operation as quickly as possible",
      "To manage workarounds and known errors",
      "To capture demand for incident resolution and service requests",
      "To systematically observe services and service components"
    ],
    "answer": 3,
    "category": "The Service Value System & Service Value Chain",
    "explanation": "Correct answer: D — \"To systematically observe services and service components\". This is strongly supported by the ITIL 4 Foundation guidance on p.138 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 156,
    "question": "Which statement about outcomes is CORRECT?",
    "options": [
      "Outcomes rely on outputs to deliver results for a stakeholder",
      "Outcomes use activities to produce tangible or intangible deliverables",
      "Outcomes give service consumers assurance of products or services",
      "Outcomes help a service consumer to assess the cost of a specific activity"
    ],
    "answer": 0,
    "category": "Key Concepts of Service Management",
    "explanation": "Correct answer: A — \"Outcomes rely on outputs to deliver results for a stakeholder\". This is supported by the ITIL 4 Foundation guidance on p.26 (Chapter 2 – Key concepts of service management)."
  },
  {
    "id": 157,
    "question": "Which skill is required by the 'service level management' practice?",
    "options": [
      "Supplier management",
      "Technical expertise",
      "Event monitoring",
      "Problem management"
    ],
    "answer": 0,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: A — \"Supplier management\". This is strongly supported by the ITIL 4 Foundation guidance on p.118 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 158,
    "question": "Which statement about the 'continual improvement model' is CORRECT?",
    "options": [
      "Organizations should work through the steps of the model in the sequence in which they are presented",
      "The flow of the model helps organizations to link improvements to its goals",
      "The model is applicable to only certain parts of the service value system",
      "Organizations should use an additional model or method to link improvements to customer value"
    ],
    "answer": 0,
    "category": "The Service Value System & Service Value Chain",
    "explanation": "Correct answer: A — \"Organizations should work through the steps of the model in the sequence in which they are presented\". This is strongly supported by the ITIL 4 Foundation guidance on p.77 (CHAPTER 4)."
  },
  {
    "id": 159,
    "question": "What is the definition of warranty?",
    "options": [
      "A means of identifying events that could cause harm or loss",
      "A means of determining whether a service is fit for purpose",
      "A means of identifying a result for a stakeholder",
      "A means of determining whether a service is fit for use"
    ],
    "answer": 3,
    "category": "Key Concepts of Service Management",
    "explanation": "Correct answer: D — \"A means of determining whether a service is fit for use\". This is strongly supported by the ITIL 4 Foundation guidance on p.29 (Chapter 2 – Key concepts of service management)."
  },
  {
    "id": 160,
    "question": "Which practice has a purpose that includes managing risks relating to confidentiality, integrity and availability?",
    "options": [
      "Change enablement",
      "Problem management",
      "Information security management",
      "Service configuration management"
    ],
    "answer": 2,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: C — \"Information security management\". This is strongly supported by the ITIL 4 Foundation guidance on p.197 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 161,
    "question": "What should be used to log and manage improvement opportunities?",
    "options": [
      "A change schedule",
      "A continual improvement register",
      "A service level agreement",
      "An incident log"
    ],
    "answer": 1,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: B — \"A continual improvement register\". This is strongly supported by the ITIL 4 Foundation guidance on p.92 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 162,
    "question": "Which guiding principle recommends that organizations should NOT start with a completely new design when improving a service?",
    "options": [
      "Focus on value",
      "Start where you are",
      "Keep it simple and practical",
      "Optimize and automate"
    ],
    "answer": 1,
    "category": "The 7 Guiding Principles",
    "explanation": "Correct answer: B — \"Start where you are\". This is strongly supported by the ITIL 4 Foundation guidance on p.55 (CHAPTER 4)."
  },
  {
    "id": 163,
    "question": "Which statement about the 'service level management' practice is CORRECT?",
    "options": [
      "It should focus entirely on system-based technical metrics",
      "It should set clear, business-based targets for service performance",
      "It should be managed by a separate team with no customer contact",
      "It should avoid the use of customer feedback surveys"
    ],
    "answer": 1,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: B — \"It should set clear, business-based targets for service performance\". This is strongly supported by the ITIL 4 Foundation guidance on p.162 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 164,
    "question": "Which role does a service consumer play when they define the requirements for a service?",
    "options": [
      "User",
      "Sponsor",
      "Customer",
      "Supplier"
    ],
    "answer": 2,
    "category": "Key Concepts of Service Management",
    "explanation": "Correct answer: C — \"Customer\". This is strongly supported by the ITIL 4 Foundation guidance on p.21 (Chapter 2 – Key concepts of service management)."
  },
  {
    "id": 165,
    "question": "Which dimension of service management includes the relationships between different components of the service value system?",
    "options": [
      "Organizations and people",
      "Information and technology",
      "Partners and suppliers",
      "Value streams and processes"
    ],
    "answer": 3,
    "category": "The Four Dimensions of Service Management",
    "explanation": "Correct answer: D — \"Value streams and processes\". This is supported by the ITIL 4 Foundation guidance on p.41 (Chapter 3 – The four dimensions of service management)."
  },
  {
    "id": 166,
    "question": "What is an output?",
    "options": [
      "A result enabled by one or more outcomes",
      "A tangible or intangible deliverable of an activity",
      "A joint activity performed by providers and consumers",
      "A configuration item managed by a supplier"
    ],
    "answer": 1,
    "category": "Key Concepts of Service Management",
    "explanation": "Correct answer: B — \"A tangible or intangible deliverable of an activity\". This is strongly supported by the ITIL 4 Foundation guidance on p.26 (Chapter 2 – Key concepts of service management)."
  },
  {
    "id": 167,
    "question": "Which is a recommendation of the 'collaborate and promote visibility' guiding principle?",
    "options": [
      "Work in isolation to prevent external distractions",
      "Ensure that all stakeholders have a shared understanding of goals",
      "Avoid sharing information about improvement progress until complete",
      "Focus only on relationships with internal stakeholders"
    ],
    "answer": 1,
    "category": "The 7 Guiding Principles",
    "explanation": "Correct answer: B — \"Ensure that all stakeholders have a shared understanding of goals\". This is strongly supported by the ITIL 4 Foundation guidance on p.59 (CHAPTER 4)."
  },
  {
    "id": 168,
    "question": "What is a core benefit of using a single continual improvement register?",
    "options": [
      "It ensures that senior management authorizes every minor change",
      "It allows improvement opportunities to be prioritized and managed effectively",
      "It removes the need for individual teams to participate in improvement",
      "It replaces the need for standard change enablement procedures"
    ],
    "answer": 1,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: B — \"It allows improvement opportunities to be prioritized and managed effectively\". This is strongly supported by the ITIL 4 Foundation guidance on p.92 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 169,
    "question": "What is the purpose of the 'deployment management' practice?",
    "options": [
      "To make new services available for use",
      "To move hardware, software, documentation, processes, or any other component to live environments",
      "To handle user-initiated service requests",
      "To plan and manage the full lifecycle of all IT assets"
    ],
    "answer": 1,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: B — \"To move hardware, software, documentation, processes, or any other component to live environments\". This is strongly supported by the ITIL 4 Foundation guidance on p.195 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 170,
    "question": "Which practice has a purpose that includes helping the organization to systematically observe services and service components?",
    "options": [
      "Service request management",
      "Monitoring and event management",
      "Service level management",
      "Problem management"
    ],
    "answer": 1,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: B — \"Monitoring and event management\". This is strongly supported by the ITIL 4 Foundation guidance on p.138 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 171,
    "question": "Which is a purpose of the 'service desk' practice?",
    "options": [
      "To set clear business-based targets for service levels",
      "To capture demand for incident resolution and service requests",
      "To manage risks to confidentiality, integrity and availability",
      "To co-create value by designing new service offerings"
    ],
    "answer": 1,
    "category": "The Service Value System & Service Value Chain",
    "explanation": "Correct answer: B — \"To capture demand for incident resolution and service requests\". This is strongly supported by the ITIL 4 Foundation guidance on p.159 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 172,
    "question": "What is the primary focus of the 'organizations and people' dimension?",
    "options": [
      "Contracts and agreements with external suppliers",
      "Roles, responsibilities, culture, and communication within teams",
      "The workflow systems needed to deliver services",
      "The databases and information security protocols"
    ],
    "answer": 1,
    "category": "The Four Dimensions of Service Management",
    "explanation": "Correct answer: B — \"Roles, responsibilities, culture, and communication within teams\". This is strongly supported by the ITIL 4 Foundation guidance on p.35 (Chapter 3 – The four dimensions of service management)."
  },
  {
    "id": 173,
    "question": "Which statement about standard changes is CORRECT?",
    "options": [
      "They are emergency changes that must be implemented immediately",
      "They are pre-authorized, low-risk changes that follow a well-established procedure",
      "They must be assessed and authorized by a full change advisory board",
      "They are high-risk changes that require a custom business case"
    ],
    "answer": 1,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: B — \"They are pre-authorized, low-risk changes that follow a well-established procedure\". This is strongly supported by the ITIL 4 Foundation guidance on p.129 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 174,
    "question": "What is a workaround?",
    "options": [
      "A permanent resolution to a known problem",
      "A temporary solution that reduces or eliminates the impact of an active incident or problem",
      "A type of standard change designed to bypass formal authorization",
      "A process for escalating unresolved incidents to suppliers"
    ],
    "answer": 1,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: B — \"A temporary solution that reduces or eliminates the impact of an active incident or problem\". This is strongly supported by the ITIL 4 Foundation guidance on p.140 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 175,
    "question": "Which value chain activity includes the categorization of incidents?",
    "options": [
      "Plan",
      "Improve",
      "Deliver and support",
      "Obtain/build"
    ],
    "answer": 2,
    "category": "The Service Value System & Service Value Chain",
    "explanation": "Correct answer: C — \"Deliver and support\". This is supported by the ITIL 4 Foundation guidance on p.75 (CHAPTER 4)."
  },
  {
    "id": 176,
    "question": "Which is the first step of the continual improvement model?",
    "options": [
      "Where are we now?",
      "What is the vision?",
      "How do we get there?",
      "Take action"
    ],
    "answer": 1,
    "category": "The Service Value System & Service Value Chain",
    "explanation": "Correct answer: B — \"What is the vision?\". This is strongly supported by the ITIL 4 Foundation guidance on p.77 (CHAPTER 4)."
  },
  {
    "id": 177,
    "question": "What is the purpose of the 'supplier management' practice?",
    "options": [
      "To move hardware and software components to live environments",
      "To ensure that the organization's suppliers and their performance are managed appropriately",
      "To set clear business-based targets for service levels",
      "To co-create value through joint development"
    ],
    "answer": 1,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: B — \"To ensure that the organization's suppliers and their performance are managed appropriately\". This is strongly supported by the ITIL 4 Foundation guidance on p.115 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 178,
    "question": "Which practice has a purpose that includes ensuring that services continue to meet the needs of the organization?",
    "options": [
      "Service request management",
      "Service level management",
      "Service desk",
      "Service configuration management"
    ],
    "answer": 1,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: B — \"Service level management\". This is strongly supported by the ITIL 4 Foundation guidance on p.162 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 179,
    "question": "Which guiding principle recommends that an organization should understand how all the parts of an organization work together?",
    "options": [
      "Focus on value",
      "Think and work holistically",
      "Keep it simple and practical",
      "Progress iteratively with feedback"
    ],
    "answer": 1,
    "category": "The 7 Guiding Principles",
    "explanation": "Correct answer: B — \"Think and work holistically\". This is strongly supported by the ITIL 4 Foundation guidance on p.62 (CHAPTER 4)."
  },
  {
    "id": 180,
    "question": "What is co-created through service relationships?",
    "options": [
      "Output",
      "Warranty",
      "Utility",
      "Value"
    ],
    "answer": 3,
    "category": "Key Concepts of Service Management",
    "explanation": "Correct answer: D — \"Value\". This is strongly supported by the ITIL 4 Foundation guidance on p.21 (Chapter 2 – Key concepts of service management)."
  },
  {
    "id": 181,
    "question": "What is the purpose of the 'service request management' practice?",
    "options": [
      "To handle all agreed, user-initiated demands for service actions, access, information, or advice",
      "To minimize the negative impact of service interruptions",
      "To manage the lifecycle of all IT assets and hardware",
      "To plan and execute normal and emergency changes"
    ],
    "answer": 0,
    "category": "The Service Value System & Service Value Chain",
    "explanation": "Correct answer: A — \"To handle all agreed, user-initiated demands for service actions, access, information, or advice\". This is strongly supported by the ITIL 4 Foundation guidance on p.166 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 182,
    "question": "Which describes a standard change?",
    "options": [
      "A change that must be implemented as soon as possible to resolve a major incident",
      "A low-risk, pre-authorized change that is well-understood and has a standard procedure",
      "A change that requires strategic authorization from a change advisory board",
      "A change triggered automatically by a monitoring or event management tool"
    ],
    "answer": 1,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: B — \"A low-risk, pre-authorized change that is well-understood and has a standard procedure\". This is strongly supported by the ITIL 4 Foundation guidance on p.129 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 183,
    "question": "Which statement about known errors is CORRECT?",
    "options": [
      "They are resolved automatically by self-help portals",
      "They are problems that have been analyzed but remain unresolved",
      "They are errors identified solely by external suppliers",
      "They must be logged directly into the change schedule"
    ],
    "answer": 1,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: B — \"They are problems that have been analyzed but remain unresolved\". This is strongly supported by the ITIL 4 Foundation guidance on p.140 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 184,
    "question": "What is the relationship between a service provider and a service consumer?",
    "options": [
      "A contract that defines only the cost of service provision",
      "A series of joint activities aimed at co-creating value based on service offerings",
      "A relationship focused solely on the delivery of physical outputs",
      "A formal SLA monitored by external regulators"
    ],
    "answer": 1,
    "category": "Key Concepts of Service Management",
    "explanation": "Correct answer: B — \"A series of joint activities aimed at co-creating value based on service offerings\". This is strongly supported by the ITIL 4 Foundation guidance on p.21 (Chapter 2 – Key concepts of service management)."
  },
  {
    "id": 185,
    "question": "Which dimension considers the workflows, controls, and procedures needed to achieve objectives?",
    "options": [
      "Organizations and people",
      "Information and technology",
      "Partners and suppliers",
      "Value streams and processes"
    ],
    "answer": 3,
    "category": "The Four Dimensions of Service Management",
    "explanation": "Correct answer: D — \"Value streams and processes\". This is strongly supported by the ITIL 4 Foundation guidance on p.41 (Chapter 3 – The four dimensions of service management)."
  },
  {
    "id": 186,
    "question": "Which guiding principle recommends that an organization should first understand the current state before designing a new solution?",
    "options": [
      "Focus on value",
      "Start where you are",
      "Keep it simple and practical",
      "Think and work holistically"
    ],
    "answer": 1,
    "category": "The 7 Guiding Principles",
    "explanation": "Correct answer: B — \"Start where you are\". This is strongly supported by the ITIL 4 Foundation guidance on p.55 (CHAPTER 4)."
  },
  {
    "id": 187,
    "question": "What is the purpose of the 'continual improvement' practice?",
    "options": [
      "To handle all agreed user-initiated demands for service actions",
      "To align the organization's practices and services with changing business needs",
      "To establish and nurture the links between the organization and its stakeholders",
      "To set clear targets for service level performance"
    ],
    "answer": 1,
    "category": "The Service Value System & Service Value Chain",
    "explanation": "Correct answer: B — \"To align the organization's practices and services with changing business needs\". This is strongly supported by the ITIL 4 Foundation guidance on p.117 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 188,
    "question": "What describes the parameters of a service that must be met for the service to be fit for use?",
    "options": [
      "Utility",
      "Warranty",
      "Outcome",
      "Output"
    ],
    "answer": 1,
    "category": "Key Concepts of Service Management",
    "explanation": "Correct answer: B — \"Warranty\". This is strongly supported by the ITIL 4 Foundation guidance on p.29 (Chapter 2 – Key concepts of service management)."
  },
  {
    "id": 189,
    "question": "Which practice manages the lifecycle of all financially valuable components that can contribute to the delivery of an IT service?",
    "options": [
      "Service configuration management",
      "IT asset management",
      "Deployment management",
      "Release management"
    ],
    "answer": 1,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: B — \"IT asset management\". This is strongly supported by the ITIL 4 Foundation guidance on p.108 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 190,
    "question": "Which statement about the 'incident management' practice is CORRECT?",
    "options": [
      "Low-impact incidents should be logged on a weekly basis",
      "All incidents must be fully resolved before a workaround is documented",
      "Low-impact incidents should be resolved efficiently to minimize resource usage",
      "Incidents with the lowest business impact should be prioritized first"
    ],
    "answer": 2,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: C — \"Low-impact incidents should be resolved efficiently to minimize resource usage\". This is strongly supported by the ITIL 4 Foundation guidance on p.131 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 191,
    "question": "Which practice recommends using a collaborative technique called swarming?",
    "options": [
      "Problem management",
      "Incident management",
      "Service request management",
      "Change enablement"
    ],
    "answer": 1,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: B — \"Incident management\". This is strongly supported by the ITIL 4 Foundation guidance on p.132 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 192,
    "question": "What is the primary benefit of standardizing and automating service requests?",
    "options": [
      "It eliminates the need for any approval procedures",
      "It streamlines the fulfilment workflow and reduces manual errors",
      "It removes the need for customer satisfaction metrics",
      "It automatically converts requests into emergency changes"
    ],
    "answer": 1,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: B — \"It streamlines the fulfilment workflow and reduces manual errors\". This is strongly supported by the ITIL 4 Foundation guidance on p.166 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 193,
    "question": "Which dimension considers the communication and collaboration tools used by teams?",
    "options": [
      "Organizations and people",
      "Information and technology",
      "Partners and suppliers",
      "Value streams and processes"
    ],
    "answer": 1,
    "category": "The Four Dimensions of Service Management",
    "explanation": "Correct answer: B — \"Information and technology\". This is strongly supported by the ITIL 4 Foundation guidance on p.36 (Chapter 3 – The four dimensions of service management)."
  },
  {
    "id": 194,
    "question": "Which guiding principle is most concerned with end-to-end service delivery?",
    "options": [
      "Focus on value",
      "Think and work holistically",
      "Keep it simple and practical",
      "Optimize and automate"
    ],
    "answer": 1,
    "category": "The 7 Guiding Principles",
    "explanation": "Correct answer: B — \"Think and work holistically\". This is strongly supported by the ITIL 4 Foundation guidance on p.62 (CHAPTER 4)."
  },
  {
    "id": 195,
    "question": "What is the definition of an outcome?",
    "options": [
      "A tangible or intangible deliverable of an activity",
      "A result for a stakeholder enabled by one or more outputs",
      "Any financially valuable component contributing to service delivery",
      "A joint activity performed by providers and consumers"
    ],
    "answer": 1,
    "category": "Key Concepts of Service Management",
    "explanation": "Correct answer: B — \"A result for a stakeholder enabled by one or more outputs\". This is strongly supported by the ITIL 4 Foundation guidance on p.26 (Chapter 2 – Key concepts of service management)."
  },
  {
    "id": 196,
    "question": "What is the purpose of the 'relationship management' practice?",
    "options": [
      "To observe and systematically record configuration changes",
      "To identify, analyze, monitor, and continually improve links with stakeholders",
      "To handle user-initiated requests for service actions",
      "To move software and components to live environments"
    ],
    "answer": 1,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: B — \"To identify, analyze, monitor, and continually improve links with stakeholders\". This is strongly supported by the ITIL 4 Foundation guidance on p.106 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 197,
    "question": "Which change type requires rapid authorization, typically by an expedited process?",
    "options": [
      "Normal change",
      "Standard change",
      "Emergency change",
      "Operational change"
    ],
    "answer": 2,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: C — \"Emergency change\". This is strongly supported by the ITIL 4 Foundation guidance on p.129 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 198,
    "question": "What is the purpose of the 'service configuration management' practice?",
    "options": [
      "To set clear business-based targets for service level metrics",
      "To ensure that accurate and reliable information about the configuration of services is available",
      "To protect the confidentiality and integrity of all IT assets",
      "To systematically observe services and resolve operational errors"
    ],
    "answer": 1,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: B — \"To ensure that accurate and reliable information about the configuration of services is available\". This is strongly supported by the ITIL 4 Foundation guidance on p.204 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 199,
    "question": "Which step of the continual improvement model answers the question 'Where do we want to be?'?",
    "options": [
      "What is the vision?",
      "Where are we now?",
      "Define measurable targets",
      "Take action"
    ],
    "answer": 2,
    "category": "The Service Value System & Service Value Chain",
    "explanation": "Correct answer: C — \"Define measurable targets\". This is supported by the ITIL 4 Foundation guidance on p.77 (CHAPTER 4)."
  },
  {
    "id": 200,
    "question": "What is the purpose of the 'release management' practice?",
    "options": [
      "To move hardware and software components to live environments",
      "To make new and changed services and features available for use",
      "To handle user-initiated service requests",
      "To plan and execute normal change enablement procedures"
    ],
    "answer": 1,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: B — \"To make new and changed services and features available for use\". This is strongly supported by the ITIL 4 Foundation guidance on p.144 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 201,
    "question": "Which practice involves managing the links between an organization and its stakeholders?",
    "options": [
      "Supplier management",
      "Relationship management",
      "Service desk",
      "Change enablement"
    ],
    "answer": 1,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: B — \"Relationship management\". This is strongly supported by the ITIL 4 Foundation guidance on p.106 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 202,
    "question": "Which statement about the 'service desk' practice is CORRECT?",
    "options": [
      "It should focus purely on resolving complex technical bugs",
      "It should provide a single point of contact for all service users",
      "It must avoid the use of automation or self-help channels",
      "It should operate from a single, centralized physical office"
    ],
    "answer": 1,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: B — \"It should provide a single point of contact for all service users\". This is strongly supported by the ITIL 4 Foundation guidance on p.159 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 203,
    "question": "What is the purpose of the 'monitoring and event management' practice?",
    "options": [
      "To handle pre-defined, user-initiated demands for service actions",
      "To systematically observe services and service components",
      "To minimize the negative impact of active service interruptions",
      "To co-create value by resolving known system issues"
    ],
    "answer": 1,
    "category": "The Service Value System & Service Value Chain",
    "explanation": "Correct answer: B — \"To systematically observe services and service components\". This is strongly supported by the ITIL 4 Foundation guidance on p.138 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 204,
    "question": "Which dimension is concerned with the contracts and agreements between the service provider and third parties?",
    "options": [
      "Organizations and people",
      "Information and technology",
      "Partners and suppliers",
      "Value streams and processes"
    ],
    "answer": 2,
    "category": "The Four Dimensions of Service Management",
    "explanation": "Correct answer: C — \"Partners and suppliers\". This is strongly supported by the ITIL 4 Foundation guidance on p.40 (Chapter 3 – The four dimensions of service management)."
  },
  {
    "id": 205,
    "question": "Which guiding principle emphasizes that services should not be designed to handle every possible exception?",
    "options": [
      "Focus on value",
      "Collaborate and promote visibility",
      "Keep it simple and practical",
      "Optimize and automate"
    ],
    "answer": 2,
    "category": "The 7 Guiding Principles",
    "explanation": "Correct answer: C — \"Keep it simple and practical\". This is strongly supported by the ITIL 4 Foundation guidance on p.63 (CHAPTER 4)."
  },
  {
    "id": 206,
    "question": "What is the definition of utility?",
    "options": [
      "The functionality offered by a product or service to meet a particular need",
      "The assurance that a product or service will meet availability requirements",
      "A measure of the total cost incurred in service consumption",
      "A joint activity aimed at co-creating value for users"
    ],
    "answer": 0,
    "category": "Key Concepts of Service Management",
    "explanation": "Correct answer: A — \"The functionality offered by a product or service to meet a particular need\". This is strongly supported by the ITIL 4 Foundation guidance on p.29 (Chapter 2 – Key concepts of service management)."
  },
  {
    "id": 207,
    "question": "What is a key activity of problem management?",
    "options": [
      "Restoring normal service operations as quickly as possible",
      "Identifying actual and potential causes of incidents",
      "Handling user-initiated requests for physical assets",
      "Authorizing emergency software updates"
    ],
    "answer": 1,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: B — \"Identifying actual and potential causes of incidents\". This is strongly supported by the ITIL 4 Foundation guidance on p.140 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 208,
    "question": "Which role is responsible for authorizing the budget for service consumption?",
    "options": [
      "User",
      "Customer",
      "Sponsor",
      "Supplier"
    ],
    "answer": 2,
    "category": "Key Concepts of Service Management",
    "explanation": "Correct answer: C — \"Sponsor\". This is strongly supported by the ITIL 4 Foundation guidance on p.21 (Chapter 2 – Key concepts of service management)."
  },
  {
    "id": 209,
    "question": "What is the purpose of a continual improvement register (CIR)?",
    "options": [
      "To log and prioritize all change enablement requests",
      "To track, prioritize, and manage improvement opportunities",
      "To log active incidents and their temporary workarounds",
      "To record the performance metrics of external suppliers"
    ],
    "answer": 1,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: B — \"To track, prioritize, and manage improvement opportunities\". This is strongly supported by the ITIL 4 Foundation guidance on p.92 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 210,
    "question": "Which statement about emergency changes is CORRECT?",
    "options": [
      "They do not require any formal assessment or authorization",
      "They follow a streamlined authorization process to enable rapid implementation",
      "They are typically implemented as pre-authorized standard changes",
      "They must be postponed until a full change advisory board meeting is scheduled"
    ],
    "answer": 1,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: B — \"They follow a streamlined authorization process to enable rapid implementation\". This is strongly supported by the ITIL 4 Foundation guidance on p.129 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 211,
    "question": "Which practice is responsible for moving new software to a production environment?",
    "options": [
      "Release management",
      "Deployment management",
      "Change enablement",
      "Service request management"
    ],
    "answer": 1,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: B — \"Deployment management\". This is strongly supported by the ITIL 4 Foundation guidance on p.195 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 212,
    "question": "Which is a key activity of service request management?",
    "options": [
      "Restoring normal service after a major hardware crash",
      "Handling requests for password resets or laptop provisioning",
      "Identifying root causes of multiple recurring network bugs",
      "Authorizing normal changes in the production database"
    ],
    "answer": 1,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: B — \"Handling requests for password resets or laptop provisioning\". This is strongly supported by the ITIL 4 Foundation guidance on p.166 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 213,
    "question": "What describes the joint activities performed by a service provider and a service consumer?",
    "options": [
      "Service level agreement",
      "Service relationship management",
      "Service consumption",
      "Service provision"
    ],
    "answer": 1,
    "category": "Key Concepts of Service Management",
    "explanation": "Correct answer: B — \"Service relationship management\". This is strongly supported by the ITIL 4 Foundation guidance on p.21 (Chapter 2 – Key concepts of service management)."
  },
  {
    "id": 214,
    "question": "Which guiding principle recommends using measurements to support direct observation, rather than replacing it?",
    "options": [
      "Focus on value",
      "Start where you are",
      "Keep it simple and practical",
      "Optimize and automate"
    ],
    "answer": 1,
    "category": "The 7 Guiding Principles",
    "explanation": "Correct answer: B — \"Start where you are\". This is strongly supported by the ITIL 4 Foundation guidance on p.56 (CHAPTER 4)."
  },
  {
    "id": 215,
    "question": "What is the definition of a problem?",
    "options": [
      "An unplanned interruption or reduction in the quality of service",
      "A cause, or potential cause, of one or more incidents",
      "Any component that needs to be managed to deliver a service",
      "A change of state that has significance for service management"
    ],
    "answer": 1,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: B — \"A cause, or potential cause, of one or more incidents\". This is strongly supported by the ITIL 4 Foundation guidance on p.203 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 216,
    "question": "Which practice provides a single point of contact for all users?",
    "options": [
      "Relationship management",
      "Service desk",
      "Incident management",
      "Supplier management"
    ],
    "answer": 1,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: B — \"Service desk\". This is strongly supported by the ITIL 4 Foundation guidance on p.159 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 217,
    "question": "Which dimension includes the skills, competencies, roles, and responsibilities of the staff?",
    "options": [
      "Organizations and people",
      "Information and technology",
      "Partners and suppliers",
      "Value streams and processes"
    ],
    "answer": 0,
    "category": "The Four Dimensions of Service Management",
    "explanation": "Correct answer: A — \"Organizations and people\". This is strongly supported by the ITIL 4 Foundation guidance on p.35 (Chapter 3 – The four dimensions of service management)."
  },
  {
    "id": 218,
    "question": "Which guiding principle recommends that an organization should seek feedback at every stage of an improvement initiative?",
    "options": [
      "Focus on value",
      "Progress iteratively with feedback",
      "Think and work holistically",
      "Collaborate and promote visibility"
    ],
    "answer": 1,
    "category": "The 7 Guiding Principles",
    "explanation": "Correct answer: B — \"Progress iteratively with feedback\". This is strongly supported by the ITIL 4 Foundation guidance on p.57 (CHAPTER 4)."
  },
  {
    "id": 219,
    "question": "What is a change schedule used for?",
    "options": [
      "To record user-initiated demands for service",
      "To help plan, schedule, and avoid conflicts when implementing changes",
      "To track the performance metrics of support staff",
      "To register known bugs that require workarounds"
    ],
    "answer": 1,
    "category": "The Service Value System & Service Value Chain",
    "explanation": "Correct answer: B — \"To help plan, schedule, and avoid conflicts when implementing changes\". This is strongly supported by the ITIL 4 Foundation guidance on p.130 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 220,
    "question": "Which practice has the purpose of setting clear, business-based targets for service levels?",
    "options": [
      "Service desk",
      "Service level management",
      "Relationship management",
      "Supplier management"
    ],
    "answer": 1,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: B — \"Service level management\". This is strongly supported by the ITIL 4 Foundation guidance on p.162 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 221,
    "question": "What are the four dimensions of service management?",
    "options": [
      "Organizations and people, Information and technology, Partners and suppliers, Value streams and processes",
      "Plan, Improve, Engage, Deliver and support",
      "Sponsor, Customer, User, Supplier",
      "Utility, Warranty, Cost, Risk"
    ],
    "answer": 0,
    "category": "Key Concepts of Service Management",
    "explanation": "Correct answer: A — \"Organizations and people, Information and technology, Partners and suppliers, Value streams and processes\". This is strongly supported by the ITIL 4 Foundation guidance on p.33 (Chapter 3 – The four dimensions of service management)."
  },
  {
    "id": 222,
    "question": "Which statement about the service value chain is CORRECT?",
    "options": [
      "It converts value into customer requirements",
      "Each activity uses different combinations of practices to convert inputs into outputs",
      "It is managed strictly by senior executive officers with no input from suppliers",
      "It replaces the need for the four dimensions of service management"
    ],
    "answer": 1,
    "category": "The Four Dimensions of Service Management",
    "explanation": "Correct answer: B — \"Each activity uses different combinations of practices to convert inputs into outputs\". This is strongly supported by the ITIL 4 Foundation guidance on p.68 (CHAPTER 4)."
  },
  {
    "id": 223,
    "question": "Which practice manages vulnerabilities that were not resolved before the service went live?",
    "options": [
      "Release management",
      "Problem management",
      "Change enablement",
      "Service request management"
    ],
    "answer": 1,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: B — \"Problem management\". This is strongly supported by the ITIL 4 Foundation guidance on p.140 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 224,
    "question": "What is the relationship between utility and warranty?",
    "options": [
      "They both measure the financial cost of service provision",
      "Utility is fitness for purpose, while warranty is fitness for use",
      "Warranty is defined by the sponsor, while utility is defined by the user",
      "Utility removes risk, while warranty removes cost"
    ],
    "answer": 1,
    "category": "Key Concepts of Service Management",
    "explanation": "Correct answer: B — \"Utility is fitness for purpose, while warranty is fitness for use\". This is strongly supported by the ITIL 4 Foundation guidance on p.29 (Chapter 2 – Key concepts of service management)."
  },
  {
    "id": 225,
    "question": "Which practice handles user-initiated requests for information, advice, or access?",
    "options": [
      "Incident management",
      "Service request management",
      "Service configuration management",
      "Change enablement"
    ],
    "answer": 1,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: B — \"Service request management\". This is strongly supported by the ITIL 4 Foundation guidance on p.166 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 226,
    "question": "Which is a type of change in ITIL v4?",
    "options": [
      "Standard, normal, and emergency changes",
      "Strategic, tactical, and operational changes",
      "Supplier, customer, and partner changes",
      "Utility, warranty, and value changes"
    ],
    "answer": 0,
    "category": "Key Concepts of Service Management",
    "explanation": "Correct answer: A — \"Standard, normal, and emergency changes\". This is strongly supported by the ITIL 4 Foundation guidance on p.129 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 227,
    "question": "What is the definition of a configuration item (CI)?",
    "options": [
      "Any financial asset managed by a third-party partner",
      "Any component that needs to be managed in order to deliver an IT service",
      "A problem logged by a system administrator",
      "An output provided directly to a customer"
    ],
    "answer": 1,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: B — \"Any component that needs to be managed in order to deliver an IT service\". This is strongly supported by the ITIL 4 Foundation guidance on p.194 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 228,
    "question": "Which guiding principle promotes the use of Lean, Agile, and DevOps methods?",
    "options": [
      "Start where you are",
      "Continual improvement",
      "Think and work holistically",
      "Focus on value"
    ],
    "answer": 1,
    "category": "The 7 Guiding Principles",
    "explanation": "Correct answer: B — \"Continual improvement\". This is supported by the ITIL 4 Foundation guidance on p.93 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 229,
    "question": "What is a workaround used for?",
    "options": [
      "To completely resolve the underlying cause of multiple incidents",
      "To temporarily reduce or eliminate the negative impact of an incident or problem",
      "To pre-authorize standard changes on an automated basis",
      "To document feedback from regular customer service reviews"
    ],
    "answer": 1,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: B — \"To temporarily reduce or eliminate the negative impact of an incident or problem\". This is strongly supported by the ITIL 4 Foundation guidance on p.140 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 230,
    "question": "Which value chain activity ensures that services are delivered according to agreed specifications?",
    "options": [
      "Plan",
      "Design and transition",
      "Deliver and support",
      "Obtain/build"
    ],
    "answer": 2,
    "category": "The Service Value System & Service Value Chain",
    "explanation": "Correct answer: C — \"Deliver and support\". This is strongly supported by the ITIL 4 Foundation guidance on p.75 (CHAPTER 4)."
  },
  {
    "id": 231,
    "question": "Which role is played by an organization that defines the requirements for a service?",
    "options": [
      "User",
      "Customer",
      "Sponsor",
      "Supplier"
    ],
    "answer": 1,
    "category": "Key Concepts of Service Management",
    "explanation": "Correct answer: B — \"Customer\". This is strongly supported by the ITIL 4 Foundation guidance on p.21 (Chapter 2 – Key concepts of service management)."
  },
  {
    "id": 232,
    "question": "What is the purpose of the service value system (SVS)?",
    "options": [
      "To ensure that the organization continually co-creates value with all stakeholders through the use and management of products and services",
      "To set up a central repository for logging all system errors and service requests",
      "To manage the formal contracts and SLAs between providers and sponsors",
      "To automate the deployment of software to live production environments"
    ],
    "answer": 0,
    "category": "The Service Value System & Service Value Chain",
    "explanation": "Correct answer: A — \"To ensure that the organization continually co-creates value with all stakeholders through the use and management of products and services\". This is strongly supported by the ITIL 4 Foundation guidance on p.47 (CHAPTER 4)."
  },
  {
    "id": 233,
    "question": "Which dimension of service management considers the security and compliance requirements of an organization's partners?",
    "options": [
      "Organizations and people",
      "Information and technology",
      "Partners and suppliers",
      "Value streams and processes"
    ],
    "answer": 2,
    "category": "The Four Dimensions of Service Management",
    "explanation": "Correct answer: C — \"Partners and suppliers\". This is strongly supported by the ITIL 4 Foundation guidance on p.40 (Chapter 3 – The four dimensions of service management)."
  },
  {
    "id": 234,
    "question": "Which guiding principle recommends focusing on the end-to-end customer journey?",
    "options": [
      "Start where you are",
      "Progress iteratively with feedback",
      "Collaborate and promote visibility",
      "Focus on value"
    ],
    "answer": 3,
    "category": "The 7 Guiding Principles",
    "explanation": "Correct answer: D — \"Focus on value\". This is strongly supported by the ITIL 4 Foundation guidance on p.49 (CHAPTER 4)."
  },
  {
    "id": 235,
    "question": "What is the difference between an output and an outcome?",
    "options": [
      "An output is a tangible or intangible deliverable, while an outcome is a result enabled by one or more outputs",
      "An output is a financial cost, while an outcome is an established target level of service",
      "An output is managed by the supplier, while an outcome is managed by the service provider",
      "Outputs are fit for purpose, while outcomes are fit for use"
    ],
    "answer": 0,
    "category": "Key Concepts of Service Management",
    "explanation": "Correct answer: A — \"An output is a tangible or intangible deliverable, while an outcome is a result enabled by one or more outputs\". This is strongly supported by the ITIL 4 Foundation guidance on p.26 (Chapter 2 – Key concepts of service management)."
  },
  {
    "id": 236,
    "question": "Which practice is responsible for identifying actual and potential causes of incidents?",
    "options": [
      "Incident management",
      "Problem management",
      "Service request management",
      "Change enablement"
    ],
    "answer": 1,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: B — \"Problem management\". This is strongly supported by the ITIL 4 Foundation guidance on p.140 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 237,
    "question": "Which statement about change authorities is CORRECT?",
    "options": [
      "A single change authority must approve every type of change",
      "A change authority should be assigned to each type of change and change model",
      "Change authorities are only required for emergency changes",
      "The service desk acts as the change authority for all normal changes"
    ],
    "answer": 1,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: B — \"A change authority should be assigned to each type of change and change model\". This is strongly supported by the ITIL 4 Foundation guidance on p.193 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 238,
    "question": "What is the primary focus of the 'value streams and processes' dimension?",
    "options": [
      "Skills, competencies, and communication among personnel",
      "Workflows, activities, controls, and procedures needed to achieve objectives",
      "The hardware, databases, and application security parameters",
      "Contracts and formal relationships with third-party suppliers"
    ],
    "answer": 1,
    "category": "The Four Dimensions of Service Management",
    "explanation": "Correct answer: B — \"Workflows, activities, controls, and procedures needed to achieve objectives\". This is strongly supported by the ITIL 4 Foundation guidance on p.41 (Chapter 3 – The four dimensions of service management)."
  },
  {
    "id": 239,
    "question": "Which step of the continual improvement model involves executing the improvement plan?",
    "options": [
      "How do we get there?",
      "Take action",
      "Did we get there?",
      "Where do we want to be?"
    ],
    "answer": 1,
    "category": "The Service Value System & Service Value Chain",
    "explanation": "Correct answer: B — \"Take action\". This is strongly supported by the ITIL 4 Foundation guidance on p.81 (CHAPTER 4)."
  },
  {
    "id": 240,
    "question": "Which practice recommends performing regular service reviews with customers?",
    "options": [
      "Service desk",
      "Service level management",
      "Continual improvement",
      "Change enablement"
    ],
    "answer": 1,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: B — \"Service level management\". This is strongly supported by the ITIL 4 Foundation guidance on p.162 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 241,
    "question": "What is the primary concern of the 'obtain/build' value chain activity?",
    "options": [
      "To ensure that service components are available when and where they are needed",
      "To ensure a shared understanding of the vision and improvement direction",
      "To meet stakeholder expectations for quality, cost, and time to market",
      "To provide services to agreed specifications and support their consumption"
    ],
    "answer": 0,
    "category": "The Service Value System & Service Value Chain",
    "explanation": "Correct answer: A — \"To ensure that service components are available when and where they are needed\". This is strongly supported by the ITIL 4 Foundation guidance on p.74 (CHAPTER 4)."
  },
  {
    "id": 242,
    "question": "Which guiding principle recommends that you should make information visible and promote collaboration?",
    "options": [
      "Focus on value",
      "Collaborate and promote visibility",
      "Keep it simple and practical",
      "Optimize and automate"
    ],
    "answer": 1,
    "category": "The 7 Guiding Principles",
    "explanation": "Correct answer: B — \"Collaborate and promote visibility\". This is strongly supported by the ITIL 4 Foundation guidance on p.59 (CHAPTER 4)."
  },
  {
    "id": 243,
    "question": "What is a major risk of organizational silos?",
    "options": [
      "They increase collaboration between different departments",
      "They lead to fragmented workflows, lack of transparency, and poor end-to-end communication",
      "They automatically reduce the cost of service consumption",
      "They replace the need for the four dimensions of service management"
    ],
    "answer": 1,
    "category": "Key Concepts of Service Management",
    "explanation": "Correct answer: B — \"They lead to fragmented workflows, lack of transparency, and poor end-to-end communication\". This is strongly supported by the ITIL 4 Foundation guidance on p.47 (CHAPTER 4)."
  },
  {
    "id": 244,
    "question": "Which practice involves tracking the performance of external vendors?",
    "options": [
      "Supplier management",
      "Relationship management",
      "Service desk",
      "Change enablement"
    ],
    "answer": 0,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: A — \"Supplier management\". This is strongly supported by the ITIL 4 Foundation guidance on p.115 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 245,
    "question": "What is the relationship between the service value chain and value streams?",
    "options": [
      "They are completely independent systems that do not interact",
      "Value streams are specific combinations of activities and practices that flow through the service value chain",
      "Value streams replace the service value chain in modern organizations",
      "The service value chain is a single value stream designed by the customer"
    ],
    "answer": 1,
    "category": "The Service Value System & Service Value Chain",
    "explanation": "Correct answer: B — \"Value streams are specific combinations of activities and practices that flow through the service value chain\". This is strongly supported by the ITIL 4 Foundation guidance on p.69 (CHAPTER 4)."
  },
  {
    "id": 246,
    "question": "Which is an example of an operational metric in service level management?",
    "options": [
      "Customer satisfaction survey score",
      "System uptime percentage",
      "The number of business transactions completed",
      "The total revenue generated by the service"
    ],
    "answer": 1,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: B — \"System uptime percentage\". This is supported by the ITIL 4 Foundation guidance on p.165 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 247,
    "question": "What is the purpose of the 'IT asset management' practice?",
    "options": [
      "To move hardware and software to live environments",
      "To plan and manage the full lifecycle of all IT assets to help the organization maximize value, control costs, and manage risks",
      "To handle user-initiated service requests",
      "To set clear business-based targets for service levels"
    ],
    "answer": 1,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: B — \"To plan and manage the full lifecycle of all IT assets to help the organization maximize value, control costs, and manage risks\". This is strongly supported by the ITIL 4 Foundation guidance on p.108 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 248,
    "question": "What describes a change of state that has significance for the management of an IT service?",
    "options": [
      "Problem",
      "Incident",
      "Event",
      "Request"
    ],
    "answer": 2,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: C — \"Event\". This is strongly supported by the ITIL 4 Foundation guidance on p.138 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 249,
    "question": "Which role represents the person who uses the services?",
    "options": [
      "Customer",
      "User",
      "Sponsor",
      "Supplier"
    ],
    "answer": 1,
    "category": "Key Concepts of Service Management",
    "explanation": "Correct answer: B — \"User\". This is strongly supported by the ITIL 4 Foundation guidance on p.21 (Chapter 2 – Key concepts of service management)."
  },
  {
    "id": 250,
    "question": "What is co-created when service providers and consumers work together?",
    "options": [
      "Outputs",
      "Warranty",
      "Value",
      "Utility"
    ],
    "answer": 2,
    "category": "Key Concepts of Service Management",
    "explanation": "Correct answer: C — \"Value\". This is strongly supported by the ITIL 4 Foundation guidance on p.19 (Chapter 2 – Key concepts of service management)."
  },
  {
    "id": 251,
    "question": "Which dimension of service management is concerned with roles, responsibilities, and culture?",
    "options": [
      "Organizations and people",
      "Information and technology",
      "Partners and suppliers",
      "Value streams and processes"
    ],
    "answer": 0,
    "category": "The Four Dimensions of Service Management",
    "explanation": "Correct answer: A — \"Organizations and people\". This is strongly supported by the ITIL 4 Foundation guidance on p.35 (Chapter 3 – The four dimensions of service management)."
  },
  {
    "id": 252,
    "question": "Which guiding principle recommends that you should focus on simplicity first?",
    "options": [
      "Start where you are",
      "Keep it simple and practical",
      "Think and work holistically",
      "Focus on value"
    ],
    "answer": 1,
    "category": "The 7 Guiding Principles",
    "explanation": "Correct answer: B — \"Keep it simple and practical\". This is strongly supported by the ITIL 4 Foundation guidance on p.63 (CHAPTER 4)."
  },
  {
    "id": 253,
    "question": "What is the purpose of 'continual improvement'?",
    "options": [
      "To handle user-initiated requests",
      "To align the organization's practices and services with changing business needs through the ongoing identification and improvement of services",
      "To establish links with stakeholders",
      "To set clear service level targets"
    ],
    "answer": 1,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: B — \"To align the organization's practices and services with changing business needs through the ongoing identification and improvement of services\". This is strongly supported by the ITIL 4 Foundation guidance on p.117 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 254,
    "question": "Which is the first step in the 'continual improvement' model?",
    "options": [
      "Where are we now?",
      "What is the vision?",
      "How do we get there?",
      "Take action"
    ],
    "answer": 1,
    "category": "The Service Value System & Service Value Chain",
    "explanation": "Correct answer: B — \"What is the vision?\". This is strongly supported by the ITIL 4 Foundation guidance on p.77 (CHAPTER 4)."
  },
  {
    "id": 255,
    "question": "Which practice handles password resets and hardware provisioning?",
    "options": [
      "Incident management",
      "Service request management",
      "Change enablement",
      "Supplier management"
    ],
    "answer": 1,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: B — \"Service request management\". This is strongly supported by the ITIL 4 Foundation guidance on p.166 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 256,
    "question": "What is the definition of an incident?",
    "options": [
      "A cause of one or more incidents",
      "An unplanned interruption or reduction in the quality of a service",
      "Any component that needs to be managed to deliver a service",
      "A change of state that has significance for service management"
    ],
    "answer": 1,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: B — \"An unplanned interruption or reduction in the quality of a service\". This is strongly supported by the ITIL 4 Foundation guidance on p.201 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 257,
    "question": "Which practice is responsible for assessing and prioritizing changes?",
    "options": [
      "Deployment management",
      "Change enablement",
      "Release management",
      "Problem management"
    ],
    "answer": 1,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: B — \"Change enablement\". This is strongly supported by the ITIL 4 Foundation guidance on p.128 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 258,
    "question": "What is a workaround in incident management?",
    "options": [
      "A permanent resolution of a bug",
      "A temporary solution that reduces or eliminates the impact of an incident or problem",
      "A procedural bypass of the change advisory board",
      "A automated resolution provided by external suppliers"
    ],
    "answer": 1,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: B — \"A temporary solution that reduces or eliminates the impact of an incident or problem\". This is strongly supported by the ITIL 4 Foundation guidance on p.140 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 259,
    "question": "What is a key activity of problem management?",
    "options": [
      "Restoring service operations as quickly as possible",
      "Identifying actual and potential causes of incidents",
      "Handling user-initiated requests for services",
      "Moving software components to live environments"
    ],
    "answer": 1,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: B — \"Identifying actual and potential causes of incidents\". This is strongly supported by the ITIL 4 Foundation guidance on p.140 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 260,
    "question": "Which practice provides a single point of contact for users?",
    "options": [
      "Incident management",
      "Service desk",
      "Relationship management",
      "Supplier management"
    ],
    "answer": 1,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: B — \"Service desk\". This is strongly supported by the ITIL 4 Foundation guidance on p.159 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 261,
    "question": "Which dimension includes the technologies, databases, and communication systems used?",
    "options": [
      "Organizations and people",
      "Information and technology",
      "Partners and suppliers",
      "Value streams and processes"
    ],
    "answer": 1,
    "category": "The Four Dimensions of Service Management",
    "explanation": "Correct answer: B — \"Information and technology\". This is strongly supported by the ITIL 4 Foundation guidance on p.36 (Chapter 3 – The four dimensions of service management)."
  },
  {
    "id": 262,
    "question": "Which guiding principle recommends that you should not start from scratch when starting an improvement?",
    "options": [
      "Focus on value",
      "Start where you are",
      "Keep it simple and practical",
      "Optimize and automate"
    ],
    "answer": 1,
    "category": "The 7 Guiding Principles",
    "explanation": "Correct answer: B — \"Start where you are\". This is strongly supported by the ITIL 4 Foundation guidance on p.55 (CHAPTER 4)."
  },
  {
    "id": 263,
    "question": "What is a change schedule PRIMARILY used for?",
    "options": [
      "To help plan, schedule, and avoid conflicts when implementing changes",
      "To record user-initiated demands for service",
      "To track the performance metrics of support staff",
      "To register known bugs that require workarounds"
    ],
    "answer": 0,
    "category": "The Service Value System & Service Value Chain",
    "explanation": "Correct answer: A — \"To help plan, schedule, and avoid conflicts when implementing changes\". This is strongly supported by the ITIL 4 Foundation guidance on p.130 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 264,
    "question": "Which practice has a purpose that includes setting clear business-based targets for service level performance?",
    "options": [
      "Service desk",
      "Service level management",
      "Relationship management",
      "Supplier management"
    ],
    "answer": 1,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: B — \"Service level management\". This is strongly supported by the ITIL 4 Foundation guidance on p.162 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 265,
    "question": "What are the four dimensions of service management?",
    "options": [
      "Organizations and people, Information and technology, Partners and suppliers, Value streams and processes",
      "Plan, Improve, Engage, Deliver and support",
      "Sponsor, Customer, User, Supplier",
      "Utility, Warranty, Cost, Risk"
    ],
    "answer": 0,
    "category": "Key Concepts of Service Management",
    "explanation": "Correct answer: A — \"Organizations and people, Information and technology, Partners and suppliers, Value streams and processes\". This is strongly supported by the ITIL 4 Foundation guidance on p.33 (Chapter 3 – The four dimensions of service management)."
  },
  {
    "id": 266,
    "question": "Which statement about the service value chain is CORRECT?",
    "options": [
      "It converts value into customer requirements",
      "Each activity uses different combinations of practices to convert inputs into outputs",
      "It is managed strictly by senior executive officers with no input from suppliers",
      "It replaces the need for the four dimensions of service management"
    ],
    "answer": 1,
    "category": "The Four Dimensions of Service Management",
    "explanation": "Correct answer: B — \"Each activity uses different combinations of practices to convert inputs into outputs\". This is strongly supported by the ITIL 4 Foundation guidance on p.68 (CHAPTER 4)."
  },
  {
    "id": 267,
    "question": "Which practice involves managing vulnerabilities that were not identified before going live?",
    "options": [
      "Release management",
      "Problem management",
      "Change enablement",
      "Service request management"
    ],
    "answer": 1,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: B — \"Problem management\". This is strongly supported by the ITIL 4 Foundation guidance on p.140 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 268,
    "question": "What describes whether a service will meet its availability and security requirements?",
    "options": [
      "Utility",
      "Warranty",
      "Outcome",
      "Output"
    ],
    "answer": 1,
    "category": "Key Concepts of Service Management",
    "explanation": "Correct answer: B — \"Warranty\". This is strongly supported by the ITIL 4 Foundation guidance on p.29 (Chapter 2 – Key concepts of service management)."
  },
  {
    "id": 269,
    "question": "Which practice handles user-initiated service requests?",
    "options": [
      "Incident management",
      "Service request management",
      "Service configuration management",
      "Change enablement"
    ],
    "answer": 1,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: B — \"Service request management\". This is strongly supported by the ITIL 4 Foundation guidance on p.166 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 270,
    "question": "Which is a valid change type in change enablement?",
    "options": [
      "Standard, normal, and emergency changes",
      "Strategic, tactical, and operational changes",
      "Supplier, customer, and partner changes",
      "Utility, warranty, and value changes"
    ],
    "answer": 0,
    "category": "Key Concepts of Service Management",
    "explanation": "Correct answer: A — \"Standard, normal, and emergency changes\". This is strongly supported by the ITIL 4 Foundation guidance on p.129 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 271,
    "question": "What is a configuration item (CI)?",
    "options": [
      "Any financial asset managed by a third-party partner",
      "Any component that needs to be managed in order to deliver an IT service",
      "A problem logged by a system administrator",
      "An output provided directly to a customer"
    ],
    "answer": 1,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: B — \"Any component that needs to be managed in order to deliver an IT service\". This is strongly supported by the ITIL 4 Foundation guidance on p.194 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 272,
    "question": "Which guiding principle promotes Agile, Lean, and DevOps methods?",
    "options": [
      "Start where you are",
      "Continual improvement",
      "Think and work holistically",
      "Focus on value"
    ],
    "answer": 1,
    "category": "The 7 Guiding Principles",
    "explanation": "Correct answer: B — \"Continual improvement\". This is supported by the ITIL 4 Foundation guidance on p.93 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 273,
    "question": "What is a workaround used for?",
    "options": [
      "To completely resolve the underlying cause of multiple incidents",
      "To temporarily reduce or eliminate the negative impact of an incident or problem",
      "To pre-authorize standard changes on an automated basis",
      "To document feedback from regular customer service reviews"
    ],
    "answer": 1,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: B — \"To temporarily reduce or eliminate the negative impact of an incident or problem\". This is strongly supported by the ITIL 4 Foundation guidance on p.140 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 274,
    "question": "Which value chain activity ensures that service components meet specifications?",
    "options": [
      "Plan",
      "Design and transition",
      "Deliver and support",
      "Obtain/build"
    ],
    "answer": 3,
    "category": "The Service Value System & Service Value Chain",
    "explanation": "Correct answer: D — \"Obtain/build\". This is strongly supported by the ITIL 4 Foundation guidance on p.74 (CHAPTER 4)."
  },
  {
    "id": 275,
    "question": "Which role defines the requirements for a service?",
    "options": [
      "User",
      "Customer",
      "Sponsor",
      "Supplier"
    ],
    "answer": 1,
    "category": "Key Concepts of Service Management",
    "explanation": "Correct answer: B — \"Customer\". This is strongly supported by the ITIL 4 Foundation guidance on p.21 (Chapter 2 – Key concepts of service management)."
  },
  {
    "id": 276,
    "question": "What is the purpose of the service value system (SVS)?",
    "options": [
      "To ensure that the organization continually co-creates value with all stakeholders through the use and management of products and services",
      "To set up a central repository for logging all system errors and service requests",
      "To manage the formal contracts and SLAs between providers and sponsors",
      "To automate the deployment of software to live production environments"
    ],
    "answer": 0,
    "category": "The Service Value System & Service Value Chain",
    "explanation": "Correct answer: A — \"To ensure that the organization continually co-creates value with all stakeholders through the use and management of products and services\". This is strongly supported by the ITIL 4 Foundation guidance on p.47 (CHAPTER 4)."
  },
  {
    "id": 277,
    "question": "Which dimension is concerned with relationships between different organizations?",
    "options": [
      "Organizations and people",
      "Information and technology",
      "Partners and suppliers",
      "Value streams and processes"
    ],
    "answer": 2,
    "category": "The Four Dimensions of Service Management",
    "explanation": "Correct answer: C — \"Partners and suppliers\". This is strongly supported by the ITIL 4 Foundation guidance on p.40 (Chapter 3 – The four dimensions of service management)."
  },
  {
    "id": 278,
    "question": "Which guiding principle recommends focusing on the end-to-end customer journey?",
    "options": [
      "Start where you are",
      "Progress iteratively with feedback",
      "Collaborate and promote visibility",
      "Focus on value"
    ],
    "answer": 3,
    "category": "The 7 Guiding Principles",
    "explanation": "Correct answer: D — \"Focus on value\". This is strongly supported by the ITIL 4 Foundation guidance on p.49 (CHAPTER 4)."
  },
  {
    "id": 279,
    "question": "What is the difference between an output and an outcome?",
    "options": [
      "An output is a tangible or intangible deliverable, while an outcome is a result enabled by one or more outputs",
      "An output is a financial cost, while an outcome is an established target level of service",
      "An output is managed by the supplier, while an outcome is managed by the service provider",
      "Outputs are fit for purpose, while outcomes are fit for use"
    ],
    "answer": 0,
    "category": "Key Concepts of Service Management",
    "explanation": "Correct answer: A — \"An output is a tangible or intangible deliverable, while an outcome is a result enabled by one or more outputs\". This is strongly supported by the ITIL 4 Foundation guidance on p.26 (Chapter 2 – Key concepts of service management)."
  },
  {
    "id": 280,
    "question": "Which practice is responsible for identifying actual and potential causes of incidents?",
    "options": [
      "Incident management",
      "Problem management",
      "Service request management",
      "Change enablement"
    ],
    "answer": 1,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: B — \"Problem management\". This is strongly supported by the ITIL 4 Foundation guidance on p.140 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 281,
    "question": "Which statement about change authorities is CORRECT?",
    "options": [
      "A single change authority must approve every type of change",
      "A change authority should be assigned to each type of change and change model",
      "Change authorities are only required for emergency changes",
      "The service desk acts as the change authority for all normal changes"
    ],
    "answer": 1,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: B — \"A change authority should be assigned to each type of change and change model\". This is strongly supported by the ITIL 4 Foundation guidance on p.193 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 282,
    "question": "What is the primary focus of the 'value streams and processes' dimension?",
    "options": [
      "Skills, competencies, and communication among personnel",
      "Workflows, activities, controls, and procedures needed to achieve objectives",
      "The hardware, databases, and application security parameters",
      "Contracts and formal relationships with third-party suppliers"
    ],
    "answer": 1,
    "category": "The Four Dimensions of Service Management",
    "explanation": "Correct answer: B — \"Workflows, activities, controls, and procedures needed to achieve objectives\". This is strongly supported by the ITIL 4 Foundation guidance on p.41 (Chapter 3 – The four dimensions of service management)."
  },
  {
    "id": 283,
    "question": "Which step of the continual improvement model involves executing improvement actions?",
    "options": [
      "How do we get there?",
      "Take action",
      "Did we get there?",
      "Where do we want to be?"
    ],
    "answer": 1,
    "category": "The Service Value System & Service Value Chain",
    "explanation": "Correct answer: B — \"Take action\". This is strongly supported by the ITIL 4 Foundation guidance on p.81 (CHAPTER 4)."
  },
  {
    "id": 284,
    "question": "Which practice recommends regular service reviews with customers?",
    "options": [
      "Service desk",
      "Service level management",
      "Continual improvement",
      "Change enablement"
    ],
    "answer": 1,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: B — \"Service level management\". This is strongly supported by the ITIL 4 Foundation guidance on p.162 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 285,
    "question": "What is the primary concern of the 'obtain/build' value chain activity?",
    "options": [
      "To ensure that service components are available when and where they are needed",
      "To ensure a shared understanding of the vision and improvement direction",
      "To meet stakeholder expectations for quality, cost, and time to market",
      "To provide services to agreed specifications and support their consumption"
    ],
    "answer": 0,
    "category": "The Service Value System & Service Value Chain",
    "explanation": "Correct answer: A — \"To ensure that service components are available when and where they are needed\". This is strongly supported by the ITIL 4 Foundation guidance on p.74 (CHAPTER 4)."
  },
  {
    "id": 286,
    "question": "Which guiding principle recommends that you should make information visible and promote collaboration?",
    "options": [
      "Focus on value",
      "Collaborate and promote visibility",
      "Keep it simple and practical",
      "Optimize and automate"
    ],
    "answer": 1,
    "category": "The 7 Guiding Principles",
    "explanation": "Correct answer: B — \"Collaborate and promote visibility\". This is strongly supported by the ITIL 4 Foundation guidance on p.59 (CHAPTER 4)."
  },
  {
    "id": 287,
    "question": "What is a major risk of organizational silos?",
    "options": [
      "They increase collaboration between different departments",
      "They lead to fragmented workflows, lack of transparency, and poor end-to-end communication",
      "They automatically reduce the cost of service consumption",
      "They replace the need for the four dimensions of service management"
    ],
    "answer": 1,
    "category": "Key Concepts of Service Management",
    "explanation": "Correct answer: B — \"They lead to fragmented workflows, lack of transparency, and poor end-to-end communication\". This is strongly supported by the ITIL 4 Foundation guidance on p.47 (CHAPTER 4)."
  },
  {
    "id": 288,
    "question": "Which practice involves tracking the performance of external vendors?",
    "options": [
      "Supplier management",
      "Relationship management",
      "Service desk",
      "Change enablement"
    ],
    "answer": 0,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: A — \"Supplier management\". This is strongly supported by the ITIL 4 Foundation guidance on p.115 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 289,
    "question": "What is the relationship between the service value chain and value streams?",
    "options": [
      "They are completely independent systems that do not interact",
      "Value streams are specific combinations of activities and practices that flow through the service value chain",
      "Value streams replace the service value chain in modern organizations",
      "The service value chain is a single value stream designed by the customer"
    ],
    "answer": 1,
    "category": "The Service Value System & Service Value Chain",
    "explanation": "Correct answer: B — \"Value streams are specific combinations of activities and practices that flow through the service value chain\". This is strongly supported by the ITIL 4 Foundation guidance on p.69 (CHAPTER 4)."
  },
  {
    "id": 290,
    "question": "Which is an example of an operational metric in service level management?",
    "options": [
      "Customer satisfaction survey score",
      "System uptime percentage",
      "The number of business transactions completed",
      "The total revenue generated by the service"
    ],
    "answer": 1,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: B — \"System uptime percentage\". This is supported by the ITIL 4 Foundation guidance on p.165 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 291,
    "question": "What is the purpose of the 'IT asset management' practice?",
    "options": [
      "To move hardware and software to live environments",
      "To plan and manage the full lifecycle of all IT assets to help the organization maximize value, control costs, and manage risks",
      "To handle user-initiated service requests",
      "To set clear business-based targets for service levels"
    ],
    "answer": 1,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: B — \"To plan and manage the full lifecycle of all IT assets to help the organization maximize value, control costs, and manage risks\". This is strongly supported by the ITIL 4 Foundation guidance on p.108 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 292,
    "question": "What describes a change of state that has significance for the management of an IT service?",
    "options": [
      "Problem",
      "Incident",
      "Event",
      "Request"
    ],
    "answer": 2,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: C — \"Event\". This is strongly supported by the ITIL 4 Foundation guidance on p.138 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 293,
    "question": "Which role represents the person who uses the services?",
    "options": [
      "Customer",
      "User",
      "Sponsor",
      "Supplier"
    ],
    "answer": 1,
    "category": "Key Concepts of Service Management",
    "explanation": "Correct answer: B — \"User\". This is strongly supported by the ITIL 4 Foundation guidance on p.21 (Chapter 2 – Key concepts of service management)."
  },
  {
    "id": 294,
    "question": "What is co-created when service providers and consumers work together?",
    "options": [
      "Outputs",
      "Warranty",
      "Value",
      "Utility"
    ],
    "answer": 2,
    "category": "Key Concepts of Service Management",
    "explanation": "Correct answer: C — \"Value\". This is strongly supported by the ITIL 4 Foundation guidance on p.19 (Chapter 2 – Key concepts of service management)."
  },
  {
    "id": 295,
    "question": "Which dimension of service management is concerned with roles, responsibilities, and culture?",
    "options": [
      "Organizations and people",
      "Information and technology",
      "Partners and suppliers",
      "Value streams and processes"
    ],
    "answer": 0,
    "category": "The Four Dimensions of Service Management",
    "explanation": "Correct answer: A — \"Organizations and people\". This is strongly supported by the ITIL 4 Foundation guidance on p.35 (Chapter 3 – The four dimensions of service management)."
  },
  {
    "id": 296,
    "question": "Which guiding principle recommends that you should focus on simplicity first?",
    "options": [
      "Start where you are",
      "Keep it simple and practical",
      "Think and work holistically",
      "Focus on value"
    ],
    "answer": 1,
    "category": "The 7 Guiding Principles",
    "explanation": "Correct answer: B — \"Keep it simple and practical\". This is strongly supported by the ITIL 4 Foundation guidance on p.63 (CHAPTER 4)."
  },
  {
    "id": 297,
    "question": "What is the purpose of 'continual improvement'?",
    "options": [
      "To handle user-initiated requests",
      "To align the organization's practices and services with changing business needs through the ongoing identification and improvement of services",
      "To establish links with stakeholders",
      "To set clear service level targets"
    ],
    "answer": 1,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: B — \"To align the organization's practices and services with changing business needs through the ongoing identification and improvement of services\". This is strongly supported by the ITIL 4 Foundation guidance on p.117 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 298,
    "question": "Which is the first step in the 'continual improvement' model?",
    "options": [
      "Where are we now?",
      "What is the vision?",
      "How do we get there?",
      "Take action"
    ],
    "answer": 1,
    "category": "The Service Value System & Service Value Chain",
    "explanation": "Correct answer: B — \"What is the vision?\". This is strongly supported by the ITIL 4 Foundation guidance on p.77 (CHAPTER 4)."
  },
  {
    "id": 299,
    "question": "Which practice handles password resets and hardware provisioning?",
    "options": [
      "Incident management",
      "Service request management",
      "Change enablement",
      "Supplier management"
    ],
    "answer": 1,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: B — \"Service request management\". This is strongly supported by the ITIL 4 Foundation guidance on p.166 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 300,
    "question": "What is the definition of an incident?",
    "options": [
      "A cause of one or more incidents",
      "An unplanned interruption or reduction in the quality of a service",
      "Any component that needs to be managed to deliver a service",
      "A change of state that has significance for service management"
    ],
    "answer": 1,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: B — \"An unplanned interruption or reduction in the quality of a service\". This is strongly supported by the ITIL 4 Foundation guidance on p.201 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 301,
    "question": "Which practice is responsible for assessing and prioritizing changes?",
    "options": [
      "Deployment management",
      "Change enablement",
      "Release management",
      "Problem management"
    ],
    "answer": 1,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: B — \"Change enablement\". This is strongly supported by the ITIL 4 Foundation guidance on p.128 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 302,
    "question": "What is a workaround in incident management?",
    "options": [
      "A permanent resolution of a bug",
      "A temporary solution that reduces or eliminates the impact of an incident or problem",
      "A procedural bypass of the change advisory board",
      "A automated resolution provided by external suppliers"
    ],
    "answer": 1,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: B — \"A temporary solution that reduces or eliminates the impact of an incident or problem\". This is strongly supported by the ITIL 4 Foundation guidance on p.140 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 303,
    "question": "What is a key activity of problem management?",
    "options": [
      "Restoring service operations as quickly as possible",
      "Identifying actual and potential causes of incidents",
      "Handling user-initiated requests for services",
      "Moving software components to live environments"
    ],
    "answer": 1,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: B — \"Identifying actual and potential causes of incidents\". This is strongly supported by the ITIL 4 Foundation guidance on p.140 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 304,
    "question": "Which practice provides a single point of contact for users?",
    "options": [
      "Incident management",
      "Service desk",
      "Relationship management",
      "Supplier management"
    ],
    "answer": 1,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: B — \"Service desk\". This is strongly supported by the ITIL 4 Foundation guidance on p.159 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 305,
    "question": "Which dimension includes the technologies, databases, and communication systems used?",
    "options": [
      "Organizations and people",
      "Information and technology",
      "Partners and suppliers",
      "Value streams and processes"
    ],
    "answer": 1,
    "category": "The Four Dimensions of Service Management",
    "explanation": "Correct answer: B — \"Information and technology\". This is strongly supported by the ITIL 4 Foundation guidance on p.36 (Chapter 3 – The four dimensions of service management)."
  },
  {
    "id": 306,
    "question": "Which guiding principle recommends that you should not start from scratch when starting an improvement?",
    "options": [
      "Focus on value",
      "Start where you are",
      "Keep it simple and practical",
      "Optimize and automate"
    ],
    "answer": 1,
    "category": "The 7 Guiding Principles",
    "explanation": "Correct answer: B — \"Start where you are\". This is strongly supported by the ITIL 4 Foundation guidance on p.55 (CHAPTER 4)."
  },
  {
    "id": 307,
    "question": "What is a change schedule PRIMARILY used for?",
    "options": [
      "To help plan, schedule, and avoid conflicts when implementing changes",
      "To record user-initiated demands for service",
      "To track the performance metrics of support staff",
      "To register known bugs that require workarounds"
    ],
    "answer": 0,
    "category": "The Service Value System & Service Value Chain",
    "explanation": "Correct answer: A — \"To help plan, schedule, and avoid conflicts when implementing changes\". This is strongly supported by the ITIL 4 Foundation guidance on p.130 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 308,
    "question": "Which practice has a purpose that includes setting clear business-based targets for service level performance?",
    "options": [
      "Service desk",
      "Service level management",
      "Relationship management",
      "Supplier management"
    ],
    "answer": 1,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: B — \"Service level management\". This is strongly supported by the ITIL 4 Foundation guidance on p.162 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 309,
    "question": "What are the four dimensions of service management?",
    "options": [
      "Organizations and people, Information and technology, Partners and suppliers, Value streams and processes",
      "Plan, Improve, Engage, Deliver and support",
      "Sponsor, Customer, User, Supplier",
      "Utility, Warranty, Cost, Risk"
    ],
    "answer": 0,
    "category": "Key Concepts of Service Management",
    "explanation": "Correct answer: A — \"Organizations and people, Information and technology, Partners and suppliers, Value streams and processes\". This is strongly supported by the ITIL 4 Foundation guidance on p.33 (Chapter 3 – The four dimensions of service management)."
  },
  {
    "id": 310,
    "question": "Which statement about the service value chain is CORRECT?",
    "options": [
      "It converts value into customer requirements",
      "Each activity uses different combinations of practices to convert inputs into outputs",
      "It is managed strictly by senior executive officers with no input from suppliers",
      "It replaces the need for the four dimensions of service management"
    ],
    "answer": 1,
    "category": "The Four Dimensions of Service Management",
    "explanation": "Correct answer: B — \"Each activity uses different combinations of practices to convert inputs into outputs\". This is strongly supported by the ITIL 4 Foundation guidance on p.68 (CHAPTER 4)."
  },
  {
    "id": 311,
    "question": "Which practice involves managing vulnerabilities that were not identified before going live?",
    "options": [
      "Release management",
      "Problem management",
      "Change enablement",
      "Service request management"
    ],
    "answer": 1,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: B — \"Problem management\". This is strongly supported by the ITIL 4 Foundation guidance on p.140 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 312,
    "question": "What describes whether a service will meet its availability and security requirements?",
    "options": [
      "Utility",
      "Warranty",
      "Outcome",
      "Output"
    ],
    "answer": 1,
    "category": "Key Concepts of Service Management",
    "explanation": "Correct answer: B — \"Warranty\". This is strongly supported by the ITIL 4 Foundation guidance on p.29 (Chapter 2 – Key concepts of service management)."
  },
  {
    "id": 313,
    "question": "Which practice handles user-initiated service requests?",
    "options": [
      "Incident management",
      "Service request management",
      "Service configuration management",
      "Change enablement"
    ],
    "answer": 1,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: B — \"Service request management\". This is strongly supported by the ITIL 4 Foundation guidance on p.166 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 314,
    "question": "Which is a valid change type in change enablement?",
    "options": [
      "Standard, normal, and emergency changes",
      "Strategic, tactical, and operational changes",
      "Supplier, customer, and partner changes",
      "Utility, warranty, and value changes"
    ],
    "answer": 0,
    "category": "Key Concepts of Service Management",
    "explanation": "Correct answer: A — \"Standard, normal, and emergency changes\". This is strongly supported by the ITIL 4 Foundation guidance on p.129 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 315,
    "question": "What is a configuration item (CI)?",
    "options": [
      "Any financial asset managed by a third-party partner",
      "Any component that needs to be managed in order to deliver an IT service",
      "A problem logged by a system administrator",
      "An output provided directly to a customer"
    ],
    "answer": 1,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: B — \"Any component that needs to be managed in order to deliver an IT service\". This is strongly supported by the ITIL 4 Foundation guidance on p.194 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 316,
    "question": "Which guiding principle promotes Agile, Lean, and DevOps methods?",
    "options": [
      "Start where you are",
      "Continual improvement",
      "Think and work holistically",
      "Focus on value"
    ],
    "answer": 1,
    "category": "The 7 Guiding Principles",
    "explanation": "Correct answer: B — \"Continual improvement\". This is supported by the ITIL 4 Foundation guidance on p.93 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 317,
    "question": "What is a workaround used for?",
    "options": [
      "To completely resolve the underlying cause of multiple incidents",
      "To temporarily reduce or eliminate the negative impact of an incident or problem",
      "To pre-authorize standard changes on an automated basis",
      "To document feedback from regular customer service reviews"
    ],
    "answer": 1,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: B — \"To temporarily reduce or eliminate the negative impact of an incident or problem\". This is strongly supported by the ITIL 4 Foundation guidance on p.140 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 318,
    "question": "Which value chain activity ensures that service components meet specifications?",
    "options": [
      "Plan",
      "Design and transition",
      "Deliver and support",
      "Obtain/build"
    ],
    "answer": 3,
    "category": "The Service Value System & Service Value Chain",
    "explanation": "Correct answer: D — \"Obtain/build\". This is strongly supported by the ITIL 4 Foundation guidance on p.74 (CHAPTER 4)."
  },
  {
    "id": 319,
    "question": "Which role defines the requirements for a service?",
    "options": [
      "User",
      "Customer",
      "Sponsor",
      "Supplier"
    ],
    "answer": 1,
    "category": "Key Concepts of Service Management",
    "explanation": "Correct answer: B — \"Customer\". This is strongly supported by the ITIL 4 Foundation guidance on p.21 (Chapter 2 – Key concepts of service management)."
  },
  {
    "id": 320,
    "question": "What is the purpose of the service value system (SVS)?",
    "options": [
      "To ensure that the organization continually co-creates value with all stakeholders through the use and management of products and services",
      "To set up a central repository for logging all system errors and service requests",
      "To manage the formal contracts and SLAs between providers and sponsors",
      "To automate the deployment of software to live production environments"
    ],
    "answer": 0,
    "category": "The Service Value System & Service Value Chain",
    "explanation": "Correct answer: A — \"To ensure that the organization continually co-creates value with all stakeholders through the use and management of products and services\". This is strongly supported by the ITIL 4 Foundation guidance on p.47 (CHAPTER 4)."
  },
  {
    "id": 321,
    "question": "Which dimension is concerned with relationships between different organizations?",
    "options": [
      "Organizations and people",
      "Information and technology",
      "Partners and suppliers",
      "Value streams and processes"
    ],
    "answer": 2,
    "category": "The Four Dimensions of Service Management",
    "explanation": "Correct answer: C — \"Partners and suppliers\". This is strongly supported by the ITIL 4 Foundation guidance on p.40 (Chapter 3 – The four dimensions of service management)."
  },
  {
    "id": 322,
    "question": "Which guiding principle recommends focusing on the end-to-end customer journey?",
    "options": [
      "Start where you are",
      "Progress iteratively with feedback",
      "Collaborate and promote visibility",
      "Focus on value"
    ],
    "answer": 3,
    "category": "The 7 Guiding Principles",
    "explanation": "Correct answer: D — \"Focus on value\". This is strongly supported by the ITIL 4 Foundation guidance on p.49 (CHAPTER 4)."
  },
  {
    "id": 323,
    "question": "What is the difference between an output and an outcome?",
    "options": [
      "An output is a tangible or intangible deliverable, while an outcome is a result enabled by one or more outputs",
      "An output is a financial cost, while an outcome is an established target level of service",
      "An output is managed by the supplier, while an outcome is managed by the service provider",
      "Outputs are fit for purpose, while outcomes are fit for use"
    ],
    "answer": 0,
    "category": "Key Concepts of Service Management",
    "explanation": "Correct answer: A — \"An output is a tangible or intangible deliverable, while an outcome is a result enabled by one or more outputs\". This is strongly supported by the ITIL 4 Foundation guidance on p.26 (Chapter 2 – Key concepts of service management)."
  },
  {
    "id": 324,
    "question": "Which practice is responsible for identifying actual and potential causes of incidents?",
    "options": [
      "Incident management",
      "Problem management",
      "Service request management",
      "Change enablement"
    ],
    "answer": 1,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: B — \"Problem management\". This is strongly supported by the ITIL 4 Foundation guidance on p.140 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 325,
    "question": "Which statement about change authorities is CORRECT?",
    "options": [
      "A single change authority must approve every type of change",
      "A change authority should be assigned to each type of change and change model",
      "Change authorities are only required for emergency changes",
      "The service desk acts as the change authority for all normal changes"
    ],
    "answer": 1,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: B — \"A change authority should be assigned to each type of change and change model\". This is strongly supported by the ITIL 4 Foundation guidance on p.193 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 326,
    "question": "What is the primary focus of the 'value streams and processes' dimension?",
    "options": [
      "Skills, competencies, and communication among personnel",
      "Workflows, activities, controls, and procedures needed to achieve objectives",
      "The hardware, databases, and application security parameters",
      "Contracts and formal relationships with third-party suppliers"
    ],
    "answer": 1,
    "category": "The Four Dimensions of Service Management",
    "explanation": "Correct answer: B — \"Workflows, activities, controls, and procedures needed to achieve objectives\". This is strongly supported by the ITIL 4 Foundation guidance on p.41 (Chapter 3 – The four dimensions of service management)."
  },
  {
    "id": 327,
    "question": "Which step of the continual improvement model involves executing improvement actions?",
    "options": [
      "How do we get there?",
      "Take action",
      "Did we get there?",
      "Where do we want to be?"
    ],
    "answer": 1,
    "category": "The Service Value System & Service Value Chain",
    "explanation": "Correct answer: B — \"Take action\". This is strongly supported by the ITIL 4 Foundation guidance on p.81 (CHAPTER 4)."
  },
  {
    "id": 328,
    "question": "Which practice recommends regular service reviews with customers?",
    "options": [
      "Service desk",
      "Service level management",
      "Continual improvement",
      "Change enablement"
    ],
    "answer": 1,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: B — \"Service level management\". This is strongly supported by the ITIL 4 Foundation guidance on p.162 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 329,
    "question": "What is the primary concern of the 'obtain/build' value chain activity?",
    "options": [
      "To ensure that service components are available when and where they are needed",
      "To ensure a shared understanding of the vision and improvement direction",
      "To meet stakeholder expectations for quality, cost, and time to market",
      "To provide services to agreed specifications and support their consumption"
    ],
    "answer": 0,
    "category": "The Service Value System & Service Value Chain",
    "explanation": "Correct answer: A — \"To ensure that service components are available when and where they are needed\". This is strongly supported by the ITIL 4 Foundation guidance on p.74 (CHAPTER 4)."
  },
  {
    "id": 330,
    "question": "Which guiding principle recommends that you should make information visible and promote collaboration?",
    "options": [
      "Focus on value",
      "Collaborate and promote visibility",
      "Keep it simple and practical",
      "Optimize and automate"
    ],
    "answer": 1,
    "category": "The 7 Guiding Principles",
    "explanation": "Correct answer: B — \"Collaborate and promote visibility\". This is strongly supported by the ITIL 4 Foundation guidance on p.59 (CHAPTER 4)."
  },
  {
    "id": 331,
    "question": "What is a major risk of organizational silos?",
    "options": [
      "They increase collaboration between different departments",
      "They lead to fragmented workflows, lack of transparency, and poor end-to-end communication",
      "They automatically reduce the cost of service consumption",
      "They replace the need for the four dimensions of service management"
    ],
    "answer": 1,
    "category": "Key Concepts of Service Management",
    "explanation": "Correct answer: B — \"They lead to fragmented workflows, lack of transparency, and poor end-to-end communication\". This is strongly supported by the ITIL 4 Foundation guidance on p.47 (CHAPTER 4)."
  },
  {
    "id": 332,
    "question": "Which practice involves tracking the performance of external vendors?",
    "options": [
      "Supplier management",
      "Relationship management",
      "Service desk",
      "Change enablement"
    ],
    "answer": 0,
    "category": "Key ITIL Practices",
    "explanation": "Correct answer: A — \"Supplier management\". This is strongly supported by the ITIL 4 Foundation guidance on p.115 (Chapter 5 – ITIL management practices)."
  },
  {
    "id": 333,
    "question": "What is the relationship between the service value chain and value streams?",
    "options": [
      "They are completely independent systems that do not interact",
      "Value streams are specific combinations of activities and practices that flow through the service value chain",
      "Value streams replace the service value chain in modern organizations",
      "The service value chain is a single value stream designed by the customer"
    ],
    "answer": 1,
    "category": "The Service Value System & Service Value Chain",
    "explanation": "Correct answer: B — \"Value streams are specific combinations of activities and practices that flow through the service value chain\". This is strongly supported by the ITIL 4 Foundation guidance on p.69 (CHAPTER 4)."
  }
];
