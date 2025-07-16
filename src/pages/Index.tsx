
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { CheckCircle, Brain, Target, TrendingUp, Award, BookOpen, Users, BarChart3, ArrowRight, Clock, Star } from 'lucide-react';

const Index = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [responses, setResponses] = useState({});
  const [showResults, setShowResults] = useState(false);

  const sections = [
    { id: 'intro', title: 'Introduction', icon: Target },
    { id: 'psychometric', title: 'Psychometric Assessment', icon: Brain },
    { id: 'technical', title: 'Technical & Aptitude', icon: BarChart3 },
    { id: 'wiscar', title: 'WISCAR Framework', icon: TrendingUp },
    { id: 'results', title: 'Results & Recommendations', icon: Award }
  ];

  const psychometricQuestions = [
    "I enjoy mapping out complex processes step by step.",
    "I feel energized discussing requirements with stakeholders.",
    "I stay committed to goals even when they become difficult.",
    "I prefer structured approaches to problem-solving.",
    "I find satisfaction in analyzing data to discover insights.",
    "I communicate effectively with both technical and non-technical people.",
    "I adapt quickly to changing requirements and priorities.",
    "I pay close attention to details in documentation.",
    "I enjoy facilitating meetings and workshops.",
    "I can see the big picture while managing specific details."
  ];

  const technicalQuestions = [
    {
      question: "What is the main purpose of business process modeling?",
      options: ["To create software code", "To visualize and improve business workflows", "To design user interfaces", "To manage databases"],
      correct: 1
    },
    {
      question: "Which of these is a functional requirement?",
      options: ["System should be available 99.9% of the time", "User should be able to login with email", "System should load pages in 2 seconds", "System should support 1000 concurrent users"],
      correct: 1
    },
    {
      question: "In SQL, which command is used to retrieve data?",
      options: ["INSERT", "UPDATE", "SELECT", "DELETE"],
      correct: 2
    },
    {
      question: "What's the difference between a use case and a user story?",
      options: ["No difference", "Use cases are more detailed and formal", "User stories are only for developers", "Use cases are outdated"],
      correct: 1
    }
  ];

  const wiscarDimensions = [
    { key: 'will', label: 'Will', description: 'Endurance in goal completion' },
    { key: 'interest', label: 'Interest', description: 'Curiosity about business systems' },
    { key: 'skill', label: 'Skill', description: 'Current domain or communication skills' },
    { key: 'cognitive', label: 'Cognitive Readiness', description: 'Process mapping, system thinking' },
    { key: 'ability', label: 'Ability to Learn', description: 'Openness to feedback, self-learning' },
    { key: 'reality', label: 'Real-World Alignment', description: 'Desire for BA career & stakeholder interaction' }
  ];

  const careerPaths = [
    { title: "Business Analyst", description: "Analyze business needs and document requirements" },
    { title: "Data Analyst", description: "Explore and visualize business data" },
    { title: "Product Owner", description: "Manage product backlog and stakeholder alignment" },
    { title: "Management Consultant", description: "Advise on process/product improvements" },
    { title: "Requirements Engineer", description: "Translate business needs into technical specs" }
  ];

  const IntroSection = () => (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          CAREER COMPASS
        </h1>
        <p className="text-xl text-gray-600">Should You Become a Business Analyst?</p>
        <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
          <Clock className="h-4 w-4" />
          <span>25-30 minutes</span>
        </div>
      </div>

      <Card className="border-2 border-blue-100 bg-gradient-to-br from-blue-50 to-purple-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-blue-600" />
            Purpose
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700">
            Evaluate whether you have the psychological makeup, logical mindset, and career readiness 
            to pursue a Business Analyst (BA) role through a structured but adaptive evaluation.
          </p>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-green-600" />
              What Do Business Analysts Do?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              BAs bridge business needs and IT delivery, gather and analyze requirements, 
              design workflows, and ensure solutions meet objectives using both process-thinking and data insight.
            </p>
            <div className="space-y-2">
              {careerPaths.map((path, index) => (
                <div key={index} className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">{path.title}: </span>
                    <span className="text-gray-600">{path.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="h-5 w-5 text-yellow-600" />
              Traits That Predict Success
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                "Structured, analytical thinking",
                "Empathy and stakeholder management",
                "Attention to detail",
                "Visual and process-oriented mindset",
                "Adaptability and communication skills"
              ].map((trait, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-gray-700">{trait}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="text-center">
        <Button 
          onClick={() => setCurrentSection(1)} 
          size="lg"
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
        >
          Start Assessment
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );

  const PsychometricSection = () => (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-gray-800">Psychometric Assessment</h2>
        <p className="text-gray-600">Assess personality, motivation, cognitive style, and fit</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Rate each statement (1 = Strongly Disagree, 5 = Strongly Agree)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {psychometricQuestions.map((question, index) => (
            <div key={index} className="space-y-3">
              <p className="font-medium text-gray-800">{index + 1}. {question}</p>
              <RadioGroup 
                value={responses[`psycho_${index}`] || ""} 
                onValueChange={(value) => setResponses(prev => ({...prev, [`psycho_${index}`]: value}))}
                className="flex gap-4"
              >
                {[1, 2, 3, 4, 5].map(value => (
                  <div key={value} className="flex items-center space-x-2">
                    <RadioGroupItem value={value.toString()} id={`psycho_${index}_${value}`} />
                    <Label htmlFor={`psycho_${index}_${value}`} className="text-sm">{value}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          ))}
        </CardContent>
      </Card>

      <div className="flex justify-between">
        <Button variant="outline" onClick={() => setCurrentSection(0)}>Previous</Button>
        <Button onClick={() => setCurrentSection(2)}>Next Section</Button>
      </div>
    </div>
  );

  const TechnicalSection = () => (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-gray-800">Technical & Aptitude Assessment</h2>
        <p className="text-gray-600">Measure critical thinking and BA-relevant domain knowledge</p>
      </div>

      <Card>
        <CardContent className="space-y-6 pt-6">
          {technicalQuestions.map((q, index) => (
            <div key={index} className="space-y-3">
              <p className="font-medium text-gray-800">{index + 1}. {q.question}</p>
              <RadioGroup 
                value={responses[`tech_${index}`] || ""} 
                onValueChange={(value) => setResponses(prev => ({...prev, [`tech_${index}`]: value}))}
                className="space-y-2"
              >
                {q.options.map((option, optIndex) => (
                  <div key={optIndex} className="flex items-center space-x-2">
                    <RadioGroupItem value={optIndex.toString()} id={`tech_${index}_${optIndex}`} />
                    <Label htmlFor={`tech_${index}_${optIndex}`} className="text-sm">{option}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          ))}
        </CardContent>
      </Card>

      <div className="flex justify-between">
        <Button variant="outline" onClick={() => setCurrentSection(1)}>Previous</Button>
        <Button onClick={() => setCurrentSection(3)}>Next Section</Button>
      </div>
    </div>
  );

  const WiscarSection = () => (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-gray-800">WISCAR Framework Analysis</h2>
        <p className="text-gray-600">Multidimensional readiness analysis across six key career-fit dimensions</p>
      </div>

      <div className="grid gap-4">
        {wiscarDimensions.map((dimension, index) => (
          <Card key={dimension.key}>
            <CardHeader>
              <CardTitle className="text-lg">{dimension.label}</CardTitle>
              <p className="text-sm text-gray-600">{dimension.description}</p>
            </CardHeader>
            <CardContent>
              <p className="mb-3 font-medium">Rate your current level (1-10):</p>
              <RadioGroup 
                value={responses[`wiscar_${dimension.key}`] || ""} 
                onValueChange={(value) => setResponses(prev => ({...prev, [`wiscar_${dimension.key}`]: value}))}
                className="flex gap-2 flex-wrap"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(value => (
                  <div key={value} className="flex items-center space-x-1">
                    <RadioGroupItem value={value.toString()} id={`wiscar_${dimension.key}_${value}`} />
                    <Label htmlFor={`wiscar_${dimension.key}_${value}`} className="text-sm">{value}</Label>
                  </div>
                ))}
              </RadioGroup>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-between">
        <Button variant="outline" onClick={() => setCurrentSection(2)}>Previous</Button>
        <Button onClick={() => setCurrentSection(4)}>View Results</Button>
      </div>
    </div>
  );

  const calculateScores = () => {
    // Psychometric score calculation
    const psychoAnswers = psychometricQuestions.map((_, i) => parseInt(responses[`psycho_${i}`]) || 0);
    const psychoScore = Math.round((psychoAnswers.reduce((a, b) => a + b, 0) / (psychometricQuestions.length * 5)) * 100);

    // Technical score calculation
    let techCorrect = 0;
    technicalQuestions.forEach((q, i) => {
      if (parseInt(responses[`tech_${i}`]) === q.correct) techCorrect++;
    });
    const techScore = Math.round((techCorrect / technicalQuestions.length) * 100);

    // WISCAR scores
    const wiscarScores = {};
    let wiscarTotal = 0;
    wiscarDimensions.forEach(dimension => {
      const score = (parseInt(responses[`wiscar_${dimension.key}`]) || 0) * 10;
      wiscarScores[dimension.key] = score;
      wiscarTotal += score;
    });
    const wiscarAverage = Math.round(wiscarTotal / wiscarDimensions.length);

    const overallScore = Math.round((psychoScore + techScore + wiscarAverage) / 3);

    return { psychoScore, techScore, wiscarScores, wiscarAverage, overallScore };
  };

  const getRecommendation = (score) => {
    if (score >= 75) return { verdict: "YES", color: "green", message: "Strong fit—time to start training" };
    if (score >= 55) return { verdict: "MAYBE", color: "yellow", message: "Potential fit; target specific skill areas" };
    return { verdict: "NO", color: "red", message: "Not an ideal match—explore adjacent roles" };
  };

  const ResultsSection = () => {
    const scores = calculateScores();
    const recommendation = getRecommendation(scores.overallScore);

    return (
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-gray-800">Your Assessment Results</h2>
          <div className="flex justify-center">
            <Badge 
              className={`text-lg px-4 py-2 ${
                recommendation.color === 'green' ? 'bg-green-100 text-green-800' :
                recommendation.color === 'yellow' ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }`}
            >
              {recommendation.verdict}: {recommendation.message}
            </Badge>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-sm text-gray-600">Overall Score</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600">{scores.overallScore}%</div>
              <Progress value={scores.overallScore} className="mt-2" />
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-sm text-gray-600">Psychological Fit</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-purple-600">{scores.psychoScore}%</div>
              <Progress value={scores.psychoScore} className="mt-2" />
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-sm text-gray-600">Technical Readiness</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">{scores.techScore}%</div>
              <Progress value={scores.techScore} className="mt-2" />
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-sm text-gray-600">WISCAR Average</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-orange-600">{scores.wiscarAverage}%</div>
              <Progress value={scores.wiscarAverage} className="mt-2" />
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>WISCAR Framework Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {wiscarDimensions.map(dimension => (
                <div key={dimension.key} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{dimension.label}</span>
                    <span className="text-sm text-gray-600">{scores.wiscarScores[dimension.key]}%</span>
                  </div>
                  <Progress value={scores.wiscarScores[dimension.key]} />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recommended Learning Pathway</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                "Phase 1: BA Fundamentals",
                "Phase 2: Data & SQL Basics",
                "Phase 3: Business Process Modeling (BPMN)",
                "Phase 4: Requirement Workshops & Stakeholder Management",
                "Phase 5: Hands-on Case Study Projects",
                "Phase 6: Certifications (CBAP, PMI-PBA)"
              ].map((phase, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-medium">
                    {index + 1}
                  </div>
                  <span>{phase}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <Button 
            onClick={() => {
              setCurrentSection(0);
              setResponses({});
            }}
            size="lg"
            variant="outline"
          >
            Take Assessment Again
          </Button>
        </div>
      </div>
    );
  };

  const progress = ((currentSection + 1) / sections.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Progress Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-700">
              {sections[currentSection]?.title}
            </h3>
            <span className="text-sm text-gray-500">
              Step {currentSection + 1} of {sections.length}
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Navigation Tabs */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => setCurrentSection(index)}
                  disabled={index > currentSection}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    index === currentSection
                      ? 'bg-blue-600 text-white'
                      : index < currentSection
                      ? 'bg-green-100 text-green-700 hover:bg-green-200'
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {section.title}
                  {index < currentSection && <CheckCircle className="h-4 w-4" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Section Content */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          {currentSection === 0 && <IntroSection />}
          {currentSection === 1 && <PsychometricSection />}
          {currentSection === 2 && <TechnicalSection />}
          {currentSection === 3 && <WiscarSection />}
          {currentSection === 4 && <ResultsSection />}
        </div>
      </div>
    </div>
  );
};

export default Index;
