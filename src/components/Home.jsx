import React from 'react'
import MLClassifierUI from 'ml-classifier-ui'
import Header from './header'

export default function Home() {
    return (
        <div>
            <Header/>
            <div className="hero first is-light">
                <div className="container">
                    <div className="section">
                        <div className="title">Train data</div>
                        <div className="box">
                            <MLClassifierUI/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
