import { motion } from 'framer-motion';
import { ExternalLink, Github, Award, Database, Brain, Gamepad2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import projectRag from '@/assets/projectRag.png';
import projectAttrition from '@/assets/projectAttrition.webp';
import projectAgent from '@/assets/projectAgent.jpg';
import projectWordGame from '@/assets/projectWordGame.png';

const projects = [
  {
    title: 'Advanced RAG System for Research Papers',
    description: 'Production-grade Retrieval-Augmented Generation (RAG) system for semantic search and question answering over long-form academic research papers using LLMs and vector databases.',
    technologies: ['Python', 'LLMs', 'LangChain', 'ChromaDB', 'Vector Search', 'Streamlit'],
    icon: Award,
    color: 'from-blue-500 to-cyan-500',
    achievements: ['RAG Architecture', 'Hallucination Reduction', 'Semantic Search'],
    backgroundImage: projectRag,
    github: 'https://github.com/MrVarsh/intelligent-rag-system',
    demo: '#'
  },
  {
    title: 'Employee Attrition Prediction System',
    description: 'End-to-end machine learning pipeline to predict employee attrition using structured HR data with class imbalance handling and explainable AI techniques.',
    technologies: ['Python', 'Machine Learning', 'LightGBM', 'Optuna', 'SHAP', 'Gradio'],
    icon: Database,
    color: 'from-purple-500 to-pink-500',
    achievements: ['ROC-AUC ≈ 0.90', 'Explainable ML', 'Class Imbalance Handling'],
    backgroundImage: projectAttrition,
    github: 'https://github.com/MrVarsh/Employee-Attrition-Prediction',
    demo: '#'
  },
  {
    title: 'ReAct Reasoning Agent',
    description: 'LLM-powered ReAct (Reasoning + Acting) agent capable of dynamic tool selection for real-time information retrieval with transparent reasoning traces.',
    technologies: ['Python', 'LLM Agents', 'ReAct', 'APIs', 'Gradio'],
    icon: Brain,
    color: 'from-green-500 to-emerald-500',
    achievements: ['Tool Calling', 'Reasoning Traces', 'Agent Architecture'],
    backgroundImage: projectAgent,
    github: 'https://github.com/MrVarsh/ReAct-reasoning-agent',
    demo: '#'
  },
  {
    title: 'Full-Stack Word Game Platform',
    description: 'Secure full-stack Wordle-style game platform with authentication, gameplay analytics, and admin dashboards built using React and Spring Boot.',
    technologies: ['React (Next.js)', 'Spring Boot', 'REST APIs', 'JWT', 'MySQL'],
    icon: Gamepad2,
    color: 'from-orange-500 to-red-500',
    achievements: ['JWT Authentication', 'Full-Stack Architecture', 'Admin Analytics'],
    backgroundImage: projectWordGame,
    github: 'https://github.com/MrVarsh/Word-game',
    demo: '#'
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient-neon">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions showcasing expertise in AI, ML, and Full-Stack Development
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="glass-card hover-float h-full overflow-hidden border-0 relative">
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                  style={{ backgroundImage: `url(${project.backgroundImage})` }}
                />
                
                {/* Gradient Border */}
                <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg`} />
                
                <CardContent className="p-0 relative z-10">
                  {/* Header */}
                  <div className="p-6 pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${project.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <project.icon className="h-6 w-6 text-white" />
                      </div>
                      
                      <div className="flex space-x-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="hover-glow-primary"
                          onClick={() => window.open(project.github, '_blank')}
                        >
                          <Github className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="px-6 pb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-muted/50 rounded-md text-xs font-medium border border-border hover:border-primary/50 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="px-6 pb-6">
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                        Key Achievements
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.achievements.map((achievement, achIndex) => (
                          <motion.span
                            key={achievement}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.2 + achIndex * 0.1, duration: 0.3 }}
                            viewport={{ once: true }}
                            className={`px-3 py-1 bg-gradient-to-r ${project.color} text-white text-xs font-semibold rounded-full`}
                          >
                            {achievement}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="px-6 pb-6">
                    <Button 
                      variant="neon" 
                      size="sm" 
                      className="w-full"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      View Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="glass-card border-primary/30 glow-primary max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-gradient-neon">
                Explore More Projects
              </h3>
              <p className="text-muted-foreground mb-6">
                Visit my GitHub profile to discover more innovative projects and contributions
              </p>
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => window.open('https://github.com/MrVarsh', '_blank')}
                className="group"
              >
                <Github className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                View All Projects
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
