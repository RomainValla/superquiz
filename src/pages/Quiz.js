import React, { useState } from "react";
import Card from '../components/Card';
import Selector from '../components/Select';

export default function Quiz() {

    return (
        <div className="code-quiz">
            <div className="code-quiz__content">
                <div className="code-quiz__content-text">
                    <h1>Quiz</h1>
                    <p>Here's the collection of quiz available.<br/> Please select your categorie to access the quiz</p>
                </div>
                <div className="code-quiz__content-selector">
                    <Selector />
                </div>
                <div className="code-quiz__bloc">
                    <Card />
                </div>
            </div>
        </div>
    )
}
