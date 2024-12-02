import React from "react";

const Cards = () => {
  return (
    <div className="cards flex flex-col md:flex-row gap-8">
        <div className="card">
            <section className="md:w-3/9">
                <p className="stat">1 in 5</p>
                <p className="statFinish">U.S. adults live with a mental illness.</p>
            </section>
        </div>
            
        <div className="card">
            <section className="md:w-3/9">
                <p className="stat">75%</p>
                <p className="statFinish">of all lifetime mental illness begins by age 24</p>
            </section>
        </div>

        <div className="card">
            <section className="md:w-3/9">
                <p className="statFinish">Suicide is the</p>
                <p className="stat">2nd</p>
                <p className="statFinish">leading cause of death among people aged 10-14</p>
            </section>
        </div>
    </div>
  );
}

export default Cards;