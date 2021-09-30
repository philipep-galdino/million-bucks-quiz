import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import Footer from '../src/components/Footer';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import QuizGalera from '../src/components/QuizGalera';
import Link from '../src/components/Link';

export default function Home() {
    const router = useRouter();
    const [name, setName] = useState('');

    return (
        <QuizBackground backgroundImage={db.bg}>
            <QuizContainer>
                <Widget
                  as={motion.section}
                  transition={{ duration: .5 }}
                  variants={{
                    after: {opacity: 1, scale: 1},
                    before: {opacity: 0,  scale: .6},
                  }}
                  initial="before"
                  animate="after"
                >
                    <Widget.Header>
                            <h1>{db.title}</h1>
                        </Widget.Header>
                    <Widget.Content>
                        <p>{db.description}</p><br/>
                        <form onSubmit={function(e) {
                            e.preventDefault();
                            router.push(`/quiz?name=${name}`)
                        }}
                        >
                            <Input
                                name = 'Nome do usuário'
                                onChange = {(event) => setName(event.target.value)}
                                placeholder="Qual seu nome?"
                                value={name}
                                maxLength={15}
                           />
                            <Button type="submit" disabled={name.length === 0}>
                                {`Jogar como ${name}`}
                            </Button>
                        </form>

                    </Widget.Content>
                </Widget>

                <Widget
                as={motion.section}
                transition={{ delay: .5, duration: .5 }}
                variants={{
                  after: {opacity: 1, scale: 1},
                  before: {opacity: 0,  scale: .6},
                }}
                initial="before"
                animate="after"
                >
                  <Widget.Content>
                    <h1>Ideia do jogo: </h1>
                        <p> O Objetivo deste jogo é criar um espaço lúdico e educativo tendo por base os conceitos trabalhados em:</p>
                          <ul>
                            <li>
                              Parte I – Direito à Diversidade
                            </li>
                            <li>
                              Cidadania
                            </li>
                            <li>
                             Direitos Humanos do livro Direito à Diversidade
                            </li>
                          </ul>
                          <p>
                            Todos ministrados pela professora Camila Pina na disciplina Direito e Inclusão.
                          </p>
                        {/*  */}
                    </Widget.Content>
                </Widget>
                <Footer
                as={motion.footer}
                transition={{ delay: 1, duration: 0.5 }}
                variants={{
                  show: {opacity: 1, y: '0'},
                    hidden: {opacity: 0 , y: '100%'},
                }}
                initial="hidden"
                animate="show"
                />
            </QuizContainer>
        </QuizBackground>
    );
}
