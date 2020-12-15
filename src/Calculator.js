import React, { useState } from 'react';

const Calculator = (props) => {
    // Declare state variables
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [answer, setAnswer] = useState(0);
    const [operator, setOperator] = useState('');
    const [clear, setClear] = useState('C');
    const [tallied, setTallied] = useState(false);

    //clear everything
    const allClear = () => {
        setNum1(0);
        setNum2(0);
        setOperator('');
        setAnswer(0);
    };

    //clear current num1 value
    const clearCalc = () => {
        if (clear === 'C') {
            setNum2(0);
            setAnswer(0);
            setClear('AC');
        } else {
            allClear();
        }
    };

    const setOp = (e) => {
        if (!num1) {
            return;
        }
        if (operator) {
            setOperator(e.target.innerText);
            doMath();
        } else {
            setOperator(e.target.innerText);
        }
    };

    const setNum = (e) => {
        if (operator) {
            if (num2.toString().length === 8) {
                return;
            }
            if (e.target.innerText === '0' && num2.toString().includes('.')) {
                let newNum = num2 + e.target.innerText;
                setNum2(newNum);
                setAnswer(newNum);
            } else {
                let newNum = parseFloat(num2 + e.target.innerText);
                setNum2(newNum);
                setAnswer(+newNum.toFixed(6));
            }
        } else {
            if (num1.toString().length === 8) {
                return;
            }
            if (tallied) {
                let newNum = parseInt(e.target.innerText);
                setNum1(newNum);
                setAnswer(+newNum.toFixed(6));
                setTallied(false);
            } else {
                if (
                    e.target.innerText === '0' &&
                    num1.toString().includes('.')
                ) {
                    let newNum = num1 + e.target.innerText;
                    setNum1(newNum);
                    setAnswer(newNum);
                } else {
                    let newNum = parseFloat(num1 + e.target.innerText);
                    setNum1(newNum);
                    setAnswer(+newNum.toFixed(6));
                }
            }
        }
        if (clear === 'AC') {
            setClear('C');
        }
    };

    const setNegative = () => {
        if (operator) {
            setNum2(num2 * -1);
        } else {
            setNum1(num1 * -1);
        }
        setAnswer(answer * -1);
    };

    const setDecimal = () => {
        if (operator) {
            if (num2.toString().length === 7) {
                return;
            }
            if (!num2.toString().includes('.')) {
                setNum2(num2.toString() + '.');
                setAnswer(num2.toString() + '.');
            }
        } else {
            if (num1.toString().length === 7) {
                return;
            }
            if (!num1.toString().includes('.')) {
                setNum1(num1.toString() + '.');
                setAnswer(num1.toString() + '.');
            }
        }
    };

    const doMath = () => {
        if (operator === '+') {
            //add
            let ans = parseFloat(num1) + parseFloat(num2);
            setAnswer(+ans.toFixed(6));
            setNum1(+ans.toFixed(6));
        } else if (operator === '-') {
            //subtract
            let ans = parseFloat(num1) - parseFloat(num2);
            setAnswer(+ans.toFixed(6));
            setNum1(+ans.toFixed(6));
        } else if (operator === 'x') {
            //multiply
            let ans = parseFloat(num1) * parseFloat(num2);
            setAnswer(+ans.toFixed(6));
            setNum1(+ans.toFixed(6));
        } else if (operator === '/') {
            //divide
            let ans = parseFloat(num1) / parseFloat(num2);
            setAnswer(+ans.toFixed(6));
            setNum1(+ans.toFixed(6));
        }
        setTallied(true);
        setNum2(0);
    };

    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>{answer}</p>
                <div className="answer-box"></div>
                <div className="calc-row">
                    <button
                        onClick={() => {
                            clearCalc();
                        }}
                        className="calc-button calc-button-top">
                        {clear}
                    </button>
                    <button
                        onClick={() => {
                            setNegative();
                        }}
                        className="calc-button calc-button-top">
                        +/-
                    </button>
                    <button
                        onClick={() => {
                            setAnswer(answer / 100);
                        }}
                        className="calc-button calc-button-top">
                        %
                    </button>
                    <button
                        onClick={(e) => {
                            setOp(e);
                        }}
                        className="calc-button calc-button-op">
                        /
                    </button>
                </div>
                <div className="calc-row">
                    <button
                        onClick={(e) => {
                            setNum(e);
                        }}
                        className="calc-button">
                        7
                    </button>
                    <button
                        onClick={(e) => {
                            setNum(e);
                        }}
                        className="calc-button">
                        8
                    </button>
                    <button
                        onClick={(e) => {
                            setNum(e);
                        }}
                        className="calc-button">
                        9
                    </button>
                    <button
                        onClick={(e) => {
                            setOp(e);
                        }}
                        className="calc-button calc-button-op">
                        x
                    </button>
                </div>
                <div className="calc-row">
                    <button
                        onClick={(e) => {
                            setNum(e);
                        }}
                        className="calc-button">
                        4
                    </button>
                    <button
                        onClick={(e) => {
                            setNum(e);
                        }}
                        className="calc-button">
                        5
                    </button>
                    <button
                        onClick={(e) => {
                            setNum(e);
                        }}
                        className="calc-button">
                        6
                    </button>
                    <button
                        onClick={(e) => {
                            setOp(e);
                        }}
                        className="calc-button calc-button-op">
                        -
                    </button>
                </div>
                <div className="calc-row">
                    <button
                        onClick={(e) => {
                            setNum(e);
                        }}
                        className="calc-button">
                        1
                    </button>
                    <button
                        onClick={(e) => {
                            setNum(e);
                        }}
                        className="calc-button">
                        2
                    </button>
                    <button
                        onClick={(e) => {
                            setNum(e);
                        }}
                        className="calc-button">
                        3
                    </button>
                    <button
                        onClick={(e) => {
                            setOp(e);
                        }}
                        className="calc-button calc-button-op">
                        +
                    </button>
                </div>
                <div className="calc-row">
                    <button
                        onClick={(e) => {
                            setNum(e);
                        }}
                        className="calc-button width-2">
                        0
                    </button>
                    <button
                        onClick={(e) => {
                            setDecimal(e);
                        }}
                        className="calc-button">
                        .
                    </button>
                    <button
                        onClick={() => {
                            doMath();
                            setOperator('');
                        }}
                        className="calc-button calc-button-op">
                        =
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Calculator;
