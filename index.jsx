import React from 'react';
import ReactDOM from 'react-dom/client';
import Sidebar from "./components/Sidebar"
import Skills from "./components/Skills"
import Card from "./components/Card"
import data from "./data"

function App() {
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                {...item}
                
            />
        )
    })        
    
    return (
        <div className="main">
            <section className="section-1">
                <Sidebar />
            </section>
            <section className="section-2">
                <div className="part-1">
                    <h2 className="part-1-title"> Works </h2>
                    <section className="cards-list">
                        {cards}
                    </section>
                </div>
                <Skills />
            </section>   
        </div>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />); 

/* <section className="section-2">
              
              <Skills />
            </section> */