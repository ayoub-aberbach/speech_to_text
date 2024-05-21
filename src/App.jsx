import { useEffect, useState } from "react";
import { recognition } from "./components/rec";

import "./App.css";
import Result from "./components/Result";
import LangComp from "./components/LangComp";


function App() {

    const [lang, setLang] = useState("ar");
    const [recResult, setRecRes] = useState("");
    const [record, setRecording] = useState(false);

    const startRecording = () => {
        if (lang !== "") {
            recognition.start();
            setRecording(true);
        }
    }

    const stopRecording = () => {
        recognition.stop();
        setRecording(false);
    }

    useEffect(() => {
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = lang;
        recognition.addEventListener("result", (e) => {
            const result = e.results[e.results.length - 1][0].transcript;
            setRecRes(result);
        })
        recognition.addEventListener("end", () => {
            setRecording(false);
        });
    }, [lang]);

    return (
        <div id="box" className="m-auto d-flex flex-column bg-info p-3">
            <div className="text-center">
                <h1 className="fs-3 text-uppercase text-center fw-bold mb-0">Talk-To-Read</h1>
                <small className="text-capitalize text-center mt-0">speech to text app</small>
                <hr style={{ color: "#000", borderWidth: 2 }} />
            </div>

            <Result
                recognitionResult={recResult}
                selectedLang={lang}
                setRes={setRecRes}
            />

            <div className="d-flex justify-content-center gap-2 align-items-center mt-auto w-100">
                <LangComp setLang={setLang} lang={lang} started={record} />
                {record ?
                    (<button
                        onClick={stopRecording}
                        className="btn btn-dark w-auto d-flex align-items-center justify-content-center shadow-none"
                    >
                        <img
                            style={{ width: "25px", height: "25px" }}
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAAAAXNSR0IArs4c6QAAAINJREFUWEft1jEKgDAQRNFs46U8v1ZeyGpt7IzwlyAE/NaTZXwukmgTPjFhp2Yp+lWUUooK0Jw79R+pzDzp23ZyR0Ss5Hxpp+5SCxncyeyWgnJKQaimlFIPAf9TdCmUUgoIVG8JG5j5GvnkljBSqHK2JFUZPJK1FNVTSikqQHPuFJW6AL3+TybEPE6LAAAAAElFTkSuQmCC"
                        />
                    </button>)
                    :
                    (<button
                        onClick={startRecording}
                        className="btn btn-dark w-auto d-flex align-items-center justify-content-center shadow-none"
                    >
                        <img
                            style={{ width: "25px", height: "25px" }}
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAAAAXNSR0IArs4c6QAAAiVJREFUWEftWItRwzAMlSaBTgKdBDoJdBK6Ce0kdBORl7ODIixbNr9eD9/1LrRx9PL09CTDdIGLLxATXScoEXkkojsiuieiMxGdpusjMx9HszDMlIjcEtFLAlOKfyCiPTMDaNf6Cqg3IgKw2gKo5y5E05sMgRIRBHoKBusG1g0qpQ0sRRf0tY3ejPt+AxTibHq0NQIKVYaPXTdT9aES89rni15ddYPy0mDTyhOSnpTpe4c32oB/CioFL6UPOOFbee3UNcQe9qtuppKD6+CRLG17HP6qQD049Oi06t63+9H0/VdfiYFUafNPmn79vdqH5vyq/t6svEdVn/fcxWwr6UCFZYc+MPNc4iIC3ejgzerTRioi2Ju1V2zWbvWZ0l81VZnGhCaSjxvOzLywZvYWraIGyjKyNFURicxSSw/MvS/q+lWfMm+lQWX9tIY8y5Kew1a/hXufYQRtAnTP7SKlF4OeBwz3wZ9mvyrMYe7w12LKpnD1IDWnA5gGtxRGZsAI3GVprvSWYAujb1GcucxLzl14RnVEboJK1FthY4ADG9XO75x4qiyFmFLeBN/SKYJWAA5BVuCSl+UjmE7GSpdelkJMKaHC+DxhA6TVlo4bPkCEQSnBaqdvSfKTV0U2dINS6URlYoTxmMMJOR/hw1NnWFO1t0v6gV/lfjZ8XG825AjNTkq7T8Q21lD67ENEROvsYkDlfwcB74mZkcLh9S1MDUd3Nl4kqHdbwwA1IuiLYQAAAABJRU5ErkJggg=="
                        />
                    </button>)
                }
            </div>

            <small className="mt-auto pt-3 text-center text-uppercase">
                Developed by<strong> A. Ayoub</strong> &copy; {new Date().getFullYear()}
            </small>
        </div>
    )
}

export default App;
