import React from 'react';
import './App.css';

function App() {
    const [ aardbeiAmount, setAardbeiAmount] = React.useState(0);
    // const [ banaanAmount, setBanaanAmount] = React.useState(0);
    // const [ appelAmount, setAppelAmount] = React.useState(0);
    // const [ kiwiAmount, setKiwiAmount] = React.useState(0);

    // function onClickMin() {
    //     console.log('Min')
    //     setFruitAmount(fruitAmount-1)
    // }
    // function onClickPlus() {
    //     console.log('Plus')
    //     setFruitAmount(fruitAmount+1)
    // }

    function resetFruitAmount() {
        setAardbeiAmount(0);
        // setBanaanAmount(0);
        // setAppelAmount(0);
        // setKiwiAmount(0);
    }

    return (
        <>
            <div id="outer-container">
                <div id="inner-container">
                    <h1>Fruitmand bezorgservice</h1>

                    <section className="fruit">
                        <h2>
                            🍓 Aardbeien

                            <button disabled={aardbeiAmount === 0} onClick = {() => setAardbeiAmount (aardbeiAmount-1)}>-</button>

                            <input
                                type="number"
                                value={aardbeiAmount}
                            />

                            <button onClick={() => setAardbeiAmount (aardbeiAmount+1)}>+</button>

                        </h2>

                        <button onClick={resetFruitAmount}>Reset</button>

                    </section>

                    <form>
                        <label htmlFor="first-name">Voornaam</label>
                        <input name="first-name" type="text"/>


                        <label htmlFor="last-name">Achternaam</label>
                        <input name="last-name" type="text"/>

                        <label htmlFor="age">Leeftijd</label>
                        <input name="age" type="number"/>

                        <label htmlFor="postcode">Postcode</label>
                        <input name="postcode" type="text"/>

                        <label htmlFor="bezorg-frequentie">Bezorgfrequentie</label>
                        <select name="bezorg-frequentie">
                            <option value="Iedere week">Iedere week</option>
                            <option value="Om de week">Om de week</option>
                            <option value="Iedere maand">Iedere maand</option>
                        </select>

                        <input name="overdag" type="radio"/>
                        <label htmlFor="overdag">Overdag</label>

                        <input name="avond" type="radio"/>
                        <label htmlFor="avond">Avond</label>

                        <label htmlFor="opmerking">Opmerking</label>
                        <textarea name="opmerking" cols="30" rows="10"></textarea>

                        <input name="voorwaarden" type="checkbox"/>
                        <label htmlFor="voorwaarden">Ik ga akkoord met de voorwaarden</label>

                        <button type="submit">Verzend</button>

                    </form>


                </div>
            </div>
        </>
    );
}

export default App;
