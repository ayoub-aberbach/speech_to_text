import { languages } from "./langs";
import PropTypes from "prop-types";


function LangComp({ setLang, lang, started }) {
    return (
        <div className="overflow-hidden w-100">
            <select
                value={lang}
                disabled={started && true}
                className={`form-select shadow-none border-black w-100 mx-auto`}
                style={{
                    backgroundColor: `${started ? "lightgrey" : "#FFF"}`
                }}
                onChange={(e) => setLang(e.target.value)}
            >
                {languages.map(lang => {
                    return (
                        <option
                            key={lang.no}
                            value={lang.code}
                        >
                            {lang.name}
                        </option>
                    )
                })}
            </select>
        </div>
    )
}

LangComp.propTypes = {
    setLang: PropTypes.func,
    lang: PropTypes.string,
    started: PropTypes.bool
}

export default LangComp;
