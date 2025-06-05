import { useLanguage } from "../Language/LanguageContext"
import PlusIcon from "../../assets/Imgs/InformationSection/add.png"
import MinusIcon from "../../assets/Imgs/InformationSection/minus.png"
import { useState } from "react";
function MainInformationSection() {
    const {texts} = useLanguage();
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
    const handleToggle = (index: number) => {
        setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
    };
  return (
    <>
        <section className="InformationGeneral">
            <div className="InformationHeadline">
                <p>{texts.MainInformationSection.MainInformationTitle}</p>
                <p>{texts.MainInformationSection.MainInformationSubtitle}</p>
                <p>{texts.MainInformationSection.MainInformationDescription}</p>
            </div>
            <article className="InfoContaines">
                <div className="InfoItem">
                    <div className={`InfoTitle ${expandedIndex === 1 ? "expanded" : ""}`} onClick={() => handleToggle(1)}>
                        <img src={expandedIndex === 1 ? MinusIcon : PlusIcon} alt="Plus Icon" width={22} height={22} loading="lazy" decoding="async" />
                        <p>{texts?.MainInformationSection?.Informations?.Information1?.Info}</p>
                    </div>
                    {expandedIndex === 1 && (
                    <div className="AnswerContainer">
                        {texts.MainInformationSection.Informations.Information1.Answers.map((answer, index) => (
                        <div key={index} className="AnswerList">
                            <ul>
                                <li>{answer.Answer}</li>
                            </ul>
                        </div>
                        ))}
                    </div>
                    )}
                </div>

                <div className="InfoItem">
                    <div className={`InfoTitle ${expandedIndex === 2 ? "expanded" : ""}`} onClick={() => handleToggle(2)}>
                        <img src={expandedIndex === 2 ? MinusIcon : PlusIcon} alt="Plus Icon" width={22} height={22} loading="lazy" decoding="async" />
                    <p>{texts?.MainInformationSection?.Informations?.Information2?.Info}</p>
                    </div>
                    {expandedIndex === 2 && (
                    <div className="AnswerContainer">
                        {texts.MainInformationSection.Informations.Information2.Answers.map((answer, index) => (
                        <div key={index} className="AnswerList">
                            <ul>
                                <li>{answer.Answer}</li>
                            </ul>
                        </div>
                        ))}
                    </div>
                    )}
                </div>

                <div className="InfoItem">
                    <div className={`InfoTitle ${expandedIndex === 3 ? "expanded" : ""}`} onClick={() => handleToggle(3)}>
                        <img src={expandedIndex === 3 ? MinusIcon : PlusIcon} alt="Plus Icon" width={22} height={22} loading="lazy" decoding="async"/>
                        <p>{texts?.MainInformationSection?.Informations?.Information3?.Info}</p>
                    </div>
                    {expandedIndex === 3 && (
                    <div className="AnswerContainer">
                        {texts.MainInformationSection.Informations.Information3.Answers.map((answer, index) => (
                        <div key={index} className="AnswerList">
                            <ul>
                                <li>{answer.Answer}</li>
                            </ul>
                        </div>
                        ))}
                    </div>
                    )}
                </div>

                <div className="InfoItem">
                    <div className={`InfoTitle ${expandedIndex === 4 ? "expanded" : ""}`} onClick={() => handleToggle(4)}>
                        <img src={expandedIndex === 4 ? MinusIcon : PlusIcon} alt="Plus Icon" width={22} height={22} loading="lazy" decoding="async"/>
                        <p>{texts?.MainInformationSection?.Informations?.Information4?.Info}</p>
                    </div>
                    {expandedIndex === 4 && (
                    <div className="AnswerContainer">
                        {texts.MainInformationSection.Informations.Information4.Answers.map((answer, index) => (
                        <div key={index} className="AnswerList">
                            <ul>
                                <li>{answer.Answer}</li>
                            </ul>
                        </div>
                        ))}
                    </div>
                    )}
                </div>

                <div className="InfoItem">
                    <div className={`InfoTitle ${expandedIndex === 5 ? "expanded" : ""}`} onClick={() => handleToggle(5)}>
                        <img src={expandedIndex === 5 ? MinusIcon : PlusIcon} alt="Plus Icon" width={22} height={22} loading="lazy" decoding="async"/>
                        <p>{texts?.MainInformationSection?.Informations?.Information5?.Info}</p>
                    </div>
                    {expandedIndex === 5 && (
                    <div className="AnswerContainer">
                        {texts.MainInformationSection.Informations.Information5.Answers.map((answer, index) => (
                        <div key={index} className="ItineraryAnswerList">
                            <ul>
                                <li>
                                    <span className="Stops">{answer.Stop}</span> <br />
                                    {answer.Answer}
                                </li>
                            </ul>
                        </div>
                        ))}
                    </div>
                    )}
                </div>

                <div className="InfoItem">
                    <div className={`InfoTitle ${expandedIndex === 6 ? "expanded" : ""}`} onClick={() => handleToggle(6)}>
                        <img src={expandedIndex === 6 ? MinusIcon : PlusIcon} alt="Plus Icon" width={22} height={22} loading="lazy" decoding="async"/>
                        <p>{texts?.MainInformationSection?.Informations?.Information6?.Info}</p>
                    </div>
                    {expandedIndex === 6 && (
                    <div className="AnswerContainer">
                        {texts.MainInformationSection.Informations.Information6.Answers.map((answer, index) => (
                        <div key={index} className="AnswerList">
                            <ul>
                                <li>{answer.Answer}</li>
                            </ul>
                        </div>
                        ))}
                    </div>
                    )}
                </div>

                <div className="InfoItem">
                    <div className={`InfoTitle ${expandedIndex === 7 ? "expand" : ""}`} onClick={() => handleToggle(7)}>
                        <img src={expandedIndex === 7 ? MinusIcon : PlusIcon} alt="Plus Icon" width={22} height={22} loading="lazy" decoding="async"/>
                        <p>{texts?.MainInformationSection?.Informations?.Information7?.Info}</p>
                    </div>
                    {expandedIndex === 7 && (
                    <div className="AnswerContainer">
                        {texts.MainInformationSection.Informations.Information7.Answers.map((answer, index) => (
                        <div key={index} className="AnswerList">
                            <ul>
                                <li>{answer.Answer}</li>
                            </ul>
                        </div>
                        ))}
                    </div>
                    )}
                </div>
            </article>
        </section>
    </>
  )
}

export default MainInformationSection