import React from 'react';
import './Shapes.css';

export function MrZero() {
  return (
    <svg id="path" width="150" height="150">
        <path d="M 50 50
                Q 70 50
                70 80
                T 50 110
                T 30 80
                T 50 50
                M 50 60
                Q 60 60
                60 80
                T 50 100
                T 40 80
                T 50 60
                "/>
        </svg>
  )
}

export function MrOne() {
  return (
    <div class="animation-container">
        <svg viewBox="0 0 100 100">
            <path id="nrOne" d="
                M50 50
                H70
                V40
                H60
                V0
                H40
                V10
                H50
                V40
                H40
                V50
                H50">
            </path>
        </svg>
    </div>
  )
}

export function NrTwo() {
  return (
    <svg id="path" width="150" height="150">
        <path d="M 55 60
                Q 55 40
                70 50
                T 75 70
                T 48 85
                V 100
                H 85
                V 92
                H 58
                V 88
                Q 80 85
                88 65
                Q 92 50
                70 41
                T 45 60
                L 55 60
                "/>
    </svg>
  )
}