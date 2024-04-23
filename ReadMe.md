Code before changing anything in form
let score = 0;
      let wicket = 0;
      let ballWiseRes = []

      /* function addOne() {
        score += 1;
        // To render the score on the screen you have to render the app.
        rootElement.render(<App />);
      }

      function addTwo() {
        score += 2;
        rootElement.render(<App />);
      }
      ******We have to write multiple function in this way so we have to find a short way to add all those no
      */

      // Short Way

      function addScore(num) {
        ballWiseRes.push(num)
        if (wicket < 10) {
          score += num;
          rootElement.render(<App />);
          console.log(ballWiseRes)
        }
      }

      function addWicket() {
        ballWiseRes.push("W")
        if (wicket < 10) {
          wicket += 1;
          rootElement.render(<App />);
          console.log(ballWiseRes)
        }
      }
      const ScoreButtons =() =>(
        <div>
            <button onClick={() => addScore(0)}>0</button>
            <button onClick={() => addScore(1)}>1</button>
            <button onClick={() => addScore(2)}>2</button>
            {/* we cant write addScore(2) as it will lead to infinite loop , as this event will make a automatic call to the function and the function renders the app component and then the process continues till infinity so to avaoid this we use inline arrow function   () =>addScore(2)*/}
            <button onClick={() => addScore(3)}>3</button>
            <button onClick={() => addScore(4)}>4</button>
            <button onClick={() => addScore(5)}>5</button>
            <button onClick={() => addScore(6)}>6</button>
            <button onClick={addWicket} style={{color : "brown"}}>wicket</button>
          </div>
        )

        const Result = () => (
          <div>
            {ballWiseRes.map((res,index)=> (
              <>
              {index % 6 === 0 ? <br /> : null}
              
              <span key={index} style={{color: res==='W' ? 'red' : 'blue'}}>{res===0 ? <strong>.</strong> : res }</span>&nbsp;&nbsp;&nbsp; </>))}
              
            </div>
        )

        function handleSubmit(event){
          event.preventDefault();
        }

        const Form = () => (
          <form onSubmit={handleSubmit/*Here we used Synthetic Event to control the default behaviour of Html Form */}>
            <input />
            <input />
            <button>Submit</button>
            </form>
        )

      const App = () => (
        <>
          <h1>SCORE KEEPER</h1>
          <h1>
            SCORE : {score}/{wicket}
          </h1>
          <ScoreButtons />
          <br />
          <Form />
          <hr />
          

        </>
      );
      const rootElement = ReactDOM.createRoot(document.getElementById("root"));
      rootElement.render(<App />);