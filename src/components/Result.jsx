import PropTypes from "prop-types";
import { useEffect, useState } from "react";


function Result({ recognitionResult, setRes, selectedLang }) {

    const [copied, setCopied] = useState("copy");

    const copyOutput = async () => {
        await navigator.clipboard.writeText(recognitionResult);
        setCopied("copied");
    }

    useEffect(() => {
        let change;
        change = setTimeout(() => {
            if (copied === "copied") {
                setCopied("copy");
            }
        }, 2000);
        if (copied === "copy") {
            clearTimeout(change)
        }
    }, [copied])

    return (
        <div className="mb-3">
            <div className="d-flex justify-content-between align-items-center mb-2">
                {recognitionResult !== "" &&
                    <>
                        <button
                            type="button"
                            onClick={() => setRes("")}
                            style={{
                                animation: `${recognitionResult !== "" && "fade 2s"}`
                            }}
                            className="btn btn-sm btn-light shadow px-1 fw-bold d-flex align-items-center gap-2 text-uppercase"
                        >
                            <img className="img-fluid" style={{ width: "25px", height: "25px" }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAABeCAYAAACq0qNuAAAAAXNSR0IArs4c6QAAA9NJREFUeF7t3OGREzEMBWBfJ1AJ0AlUAlQCVHJQCXQCPCae2Ql7tiTbek7ydobhx20s77eKrHhz91R0UASeKFEVtAielASCFzxJgBRWGS94kgAprDJe8CQBUlhlvOBJAqSwynjBkwRIYZXxgicJkMIq4wVPEiCFVcYLniRACjuS8a9KKfUfafrDYX+VUr4PjxIYIAL/qZTyMRBr15cA/9vfyeG60g4PPLL7+ZLlaRNMDPQ5E98K//aCnuiQHgqZ/yGr9FjhkenAv/cD+O9KKfh/6WGBf19K+bJ0FnsNDvTXq6dkgQc68B/p+HopO8uu2QL/844X1Bbs0sXWAv972W3ff+Bl+D14tJDI+Ec9lnU6gu+n1JJOR/B9eJwxvdMRvA0eZ03tdJjwyCKsIbd0TFtsWfD1ozk+I4x8IkYWAmN0HM/Nn4LPgAc6wHAg46Nox7f+yDge9Frvh/d0suGP6PWCI2hn9TYyjhe9nj/c6WTCn6FH8FuLXDZ+eE8nC76F7sG3dBaZ+Jb5nL6rMuA9b8sWmuciM3dUQ4ttBnxdkKz73Gf4HnTGQxs3fhb8CP7u6KFOJxM+go/sra1nrwNhZPpxTp6S2v091xW7k64J9rQvP2ejH9tMU6eTnfHT+uDDDdkFvU7JVBpZ8N6y81Li74Ze59ldbJnwo/i7opsWWzZ8FH9ndFPW7wCPiXbfmle15ha+59Os9TvAmxajK/jMbQFjY/Xfac1tEjZ8BN2ztxNFG31d91EhE34EfXd8bI80v/7Ngp+Bvit+Fx0TZ8DPRN8N37L9/W/O2fAedLSMeCw4sqs5Wqs9r0dpwVxNRya8Fx0to7fPZ3U7LvTMjI+i1+zxbKxl43c7mLO3QFbGY8fO8mX/1idSD37mEyjTYnqNnwVvQbNsA8wax1SHDSeF0DNLTa9WW9AtZcczjsG1eYq5g2GWmhZaBOss8yPjRPHdiymr1BzjHtFGsGaN48UfRs8uNdf49TuP3gtfMY51DqEOZodSY73AXc8LL6Y7lJpdUXvzmobOLDW9i9zt50MdjEpN7HZOWUxVanz4S9BVato3YVoHEyk1eM0tPFj25bHt7KmLqbfU4PxH/FsGS9EtpQbnrPj+pC3nOGdN72CipQavu7c/h/XSLV22mEZKTc167HHf098iu7ZIQ7eWmuME7zXzl3YwI6Xm+FrUfOwqvrnB38w+M/hxKaWpK0rvCVTqZB4pmOBJd1vwgicJkMIq4wVPEiCFVcYLniRACquMFzxJgBRWGS94kgAprDJe8CQBUlhlvOBJAqSwynjBkwRIYZXxJPg/xyHsX1qY6DkAAAAASUVORK5CYII=" />
                        </button>
                        <button
                            type="button"
                            onClick={copyOutput}
                            className="btn btn-sm btn-dark shadow px-1 fw-bold d-flex align-items-center gap-2 text-uppercase"
                            style={{
                                animation: `${copied === "copied" || recognitionResult !== "" && "fade 2s"}`
                            }}
                        >
                            {copied === "copied" ?
                                <img
                                    style={{ width: "25px", height: "25px" }}
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAAAAXNSR0IArs4c6QAAAUhJREFUWEftl+tRwzAQhG87gUoCnUAlJJUAlcSdkE6WbMbOHMaSb/yQPRPpp+ckfbcn7cmwHQ7skMkqVLQqVanHUYrkUzTboTgAl8j80Jki+Wlmb5EFR2IE9Q3gmIsbhSJ5NrOXBYD8EqccWASKCwNpuQuA59S6Waj2DP10k3FNbyogSakt1StUVsRdKKXSewvYHMoB3G/ZplC9zVXSdwBfm0GRlMHKaLshsxRUUwSqBfgws1ednRyQCFeH6gHcWsd1XwH+U6j7UAJKvctDeDu4l8x/XB2qLccQ2CBQkfK5kniwJFBRKKfYwczkSU3K1ouUr3de/rj3EFhxqMjLYTUoeVIEIBGjp0t3Y5d7T80A6k9tACQTHH20kcx50lROdYHkpYhA6Q9GPU03bNbfTJvBrRfmshmFmirFnHkVKqpeVaoqFVUgGvcLG+TyJu/dQU4AAAAASUVORK5CYII="
                                />
                                :
                                <img
                                    style={{ width: "25px", height: "25px" }}
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAAAAXNSR0IArs4c6QAAARlJREFUWEftmNENwjAMRO8mATaBSYBJYBNgEtgEmMTUUoqSUNo4IFQVW+pPZTvXZ0eqTYzQOEJNmIYoEdkDWBsJn0hqXJH1khKROQB9WlMxm6LMr07bJvYWvyZ56crVKUpElgAOmaBKLb1hKnJFMhXbFSIi1x8Iao++kFwlBHNRgdI5eh9/RVzKGnJduW4kFxZRSYA0XV6jJMQ8iYRe1Wq0tohL+NJTGSkX1WIzkfqgdEnoV8vnomICfY3upJwUAL99pRfBSTmpUgKlft5TTqqUQKmf99R/kwJwKiVg8Jtl4//giKUDZzyTGc6qch0eRjVt2Kzsqo6wB+kuIVl0vN26hH9168rHIune7CuO+XJDE0xjaWZBUev7ADTcKTUhs0dMAAAAAElFTkSuQmCC"
                                />
                            }
                        </button>
                    </>
                }
            </div>
            <div className="form-group">
                <textarea
                    readOnly
                    id="result"
                    value={recognitionResult}
                    className={`form-control border-0 bg-info shadow-none`}
                    onChange={(e) => setRes(e.target.value)}
                    style={{
                        height: '45vh',
                        resize: "none",
                        direction: ["ar", "iw", "fa", "ur"].includes(selectedLang) && "rtl"
                    }}
                    placeholder={
                        ["ar", "iw", "fa", "ur"].includes(selectedLang) ? "النص..." : "Output..."
                    }
                />
            </div>
        </div>
    )
}

Result.propTypes = {
    recognitionResult: PropTypes.string,
    setRes: PropTypes.func,
    clearing: PropTypes.func,
    selectedLang: PropTypes.string
}

export default Result;
