import React from 'react';
import './QuestionsAndAnswer.css';


const QuestionsAndAnswer = () => {
    return (
        <div className='row mb-5'>
            <div className="question-container col-lg-10 col-md-11 col-10 d-block mt-4 m-auto">
              <h3>Questions and Answers</h3>
                <div className="row">
                    <div className="col-lg-10 col-md-10 col-12 d-block m-auto m-md-0">
                        <h5><span className='question-design' >Question 1 :</span> How React works?</h5>
                        <p><span className='answer-design'>Answer : </span> React is a JavaScript library that creates user interfaces (UIs). Using React we can  build single page applications and mobile apps, or to build complex apps utilise it with other librarie. React was created by <b>Jordan Walke</b>, a software engineer at Facebook.React reads these objects and uses them to create HTML elements on the virtual DOM, after which it gets synced with the real DOM. So we'll have trees of objects on the virtual DOM and trees of objects on the real DOM. React automatically updates the associated DOM element when we change data on a React element</p>

                        <h5><span className='question-design' >Question 2 :</span> What is the different between props and state?</h5>
                        <p><span className='answer-design'>Answer : </span> React components are like funtions that takes perameters called <b>props</b>. <b>State</b> is a plain JavaScript object used by React to represent an information about the component's current situation. The Different props and state is props are read only props can't be modified but state changes can be asnchronous state can be modified using this.setState. Props are immutabke but state is mutable .Props allow you to pass data from one component to other components as an argument but State holds information about the components.Props can be accessed by the child component state can't be accessed by Child Perameter.</p>

                        <h5><span className='question-design' >Question 3 :</span> How useState works?</h5>
                        <p><span className='answer-design'>Answer : </span> <b>useState</b> is a Hook that returns  state variables in functional components. We can pass  the initial state to this function and it returns a variable with the current state value and another function to update this value.useState can be used to toggle between two values, usually true and false.The first parameter in the array is the current state value. The second parameter is the function that will allow you to update the state value.This is a way to “preserve” some values between the function calls.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuestionsAndAnswer;