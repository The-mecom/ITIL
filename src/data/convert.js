import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const outputPath = path.join(__dirname, 'questions.ts');

const partFiles = [
  'itil_questions_raw_part1.json',
  'itil_questions_raw_part2.json',
  'itil_questions_raw_part3.json',
  'itil_questions_raw_part4.json'
];

let allQuestions = [];
partFiles.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    allQuestions = allQuestions.concat(data.questions);
  } else {
    console.warn(`Part file not found: ${filePath}`);
  }
});

const rawData = { questions: allQuestions };

const mapCategory = (q) => {
  // Check textbook references
  let chapter = '';
  if (q.textbook_references && q.textbook_references.length > 0) {
    chapter = q.textbook_references[0].chapter || '';
  }

  const qText = q.question.toLowerCase();
  const optText = Object.values(q.options).join(' ').toLowerCase();
  const fullText = `${qText} ${optText} ${chapter.toLowerCase()}`;

  if (chapter.includes('Chapter 2') || chapter.includes('Key concepts of service management') || fullText.includes('service relationship') || fullText.includes('utility') || fullText.includes('warranty') || fullText.includes('co-creation') || fullText.includes('service provisioning') || fullText.includes('service consumption')) {
    return 'Key Concepts of Service Management';
  }

  if (chapter.includes('Guiding principles') || chapter.includes('guiding principles') || fullText.includes('guiding principle') || fullText.includes('start where you are') || fullText.includes('focus on value') || fullText.includes('progress iteratively') || fullText.includes('collaborate and promote') || fullText.includes('think and work holistically') || fullText.includes('keep it simple') || fullText.includes('optimize and automate')) {
    return 'The 7 Guiding Principles';
  }

  if (chapter.includes('Chapter 3') || chapter.includes('four dimensions') || fullText.includes('four dimensions') || fullText.includes('organizations and people') || fullText.includes('information and technology') || fullText.includes('partners and suppliers') || fullText.includes('value streams and processes') || fullText.includes('pestle')) {
    return 'The Four Dimensions of Service Management';
  }

  if (chapter.includes('CHAPTER 4') || chapter.includes('Chapter 4') || fullText.includes('service value system') || fullText.includes('service value chain') || fullText.includes('svs') || fullText.includes('svc') || fullText.includes('demand') || fullText.includes('opportunity') || fullText.includes('obtain/build') || fullText.includes('design and transition') || fullText.includes('deliver and support')) {
    return 'The Service Value System & Service Value Chain';
  }

  if (chapter.includes('Chapter 5') || chapter.includes('practices') || fullText.includes('practice') || fullText.includes('incident management') || fullText.includes('problem management') || fullText.includes('service desk') || fullText.includes('change enablement') || fullText.includes('change control') || fullText.includes('service request') || fullText.includes('continual improvement register') || fullText.includes('it asset') || fullText.includes('monitoring and event') || fullText.includes('supplier management') || fullText.includes('release management') || fullText.includes('deployment management')) {
    return 'Key ITIL Practices';
  }

  // Fallbacks using keyword weightings
  if (fullText.includes('principle') || fullText.includes('feedback') || fullText.includes('visibility')) {
    return 'The 7 Guiding Principles';
  }
  if (fullText.includes('dimension') || fullText.includes('partner') || fullText.includes('supplier')) {
    return 'The Four Dimensions of Service Management';
  }
  if (fullText.includes('value chain') || fullText.includes('value system') || fullText.includes('svs') || fullText.includes('svc')) {
    return 'The Service Value System & Service Value Chain';
  }
  if (fullText.includes('cost') || fullText.includes('risk') || fullText.includes('sponsor') || fullText.includes('customer') || fullText.includes('user') || fullText.includes('utility') || fullText.includes('warranty')) {
    return 'Key Concepts of Service Management';
  }

  return 'Key ITIL Practices';
};

const mappedQuestions = rawData.questions.map((q) => {
  const optionsMap = q.options;
  const optionsList = [optionsMap.A, optionsMap.B, optionsMap.C, optionsMap.D];
  
  const correctOptionLetter = q.correct_answer; // "A", "B", "C", "D"
  const answerIndex = ['A', 'B', 'C', 'D'].indexOf(correctOptionLetter);

  const category = mapCategory(q);

  return {
    id: q.question_number,
    question: q.question,
    options: optionsList,
    answer: answerIndex,
    category: category,
    explanation: q.explanation
  };
});

const tsContent = `import { Question } from '../types';

export const ITIL_QUESTIONS: Question[] = ${JSON.stringify(mappedQuestions, null, 2)};
`;

fs.writeFileSync(outputPath, tsContent, 'utf8');
console.log(`Successfully generated ${mappedQuestions.length} typed questions at ${outputPath}`);
