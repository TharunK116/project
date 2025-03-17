import React, { useContext, useEffect, useState } from "react";
import HeaderCard from "../../molecules/headerCard";
import CardContent from "../../molecules/cardContent";
import Modal from "../modal";
import Button from "../../atoms/buttton";
import ProfileContent from "../../molecules/profileContent";
import AnalyticsSection from "../../molecules/analystSection";
import { useModal } from "../../hooks/useModal";
import ActivitySection from "../../molecules/activity"
import './Section.css'
import { useModalContext } from "../sectionContainer/SectionContainer";
import Interests from "../../molecules/interests";
import sortByStartDate from "../../utils/sortbyStartDate";
import { getSection } from "../../utils/sectionUtils";
import { useSelector } from "react-redux";
import localStorage from "redux-persist/lib/storage";
function Section({ sectionTitle, sectionType }) {
    const [expand, setExpand] = useState(false);
    const extraClass = expand ? "card-expand" : "";
    let sectionContent = useSelector(state => state.data.data[sectionType]);
    const { handleEditItem, editingItem } = useModalContext();
    const headerConfig=getSection(sectionType).headerConfig;
    const { isModalOpen, handleAddBtnClick, handleModalClose, handleEditBtnClick } = useModal(handleEditItem);
    if(sectionType=='experience'||sectionType=='education')
     sectionContent=sortByStartDate(sectionContent);
    function toggleClick() {
        setExpand((prev) => !prev);
    }
    useEffect(() => {
        document.body.style.overflow = isModalOpen ? 'hidden' : 'unset';
    }, [isModalOpen]);

    const sectionComponentsMapping = {
        interests: (
            <section className={`${sectionType}-card card`}>
                <Interests headerConfig={headerConfig} sectionContent={sectionContent}></Interests>
            </section>
        ),
        activity: (
            <section id="Activity" className={`${sectionType}-card card`}>
                 <HeaderCard  headerConfig={headerConfig} >
                <Button btnClass="resources profile-btn" handlebtnClick={handleAddBtnClick}>
                    Create Post
                </Button>
            </HeaderCard>
                <ActivitySection 
                 headerConfig={headerConfig}
                    info={sectionContent}
                >
                </ActivitySection>
            </section>
        ),
        analytics: (
            <section className="${sectionType}-card` card">
                <AnalyticsSection
                 headerConfig={headerConfig}
                    info={sectionContent}
                >
                </AnalyticsSection>
            </section>
        ),
        profile: (
            < ProfileContent
                info={sectionContent}
               
                onEditBtnClick={() => handleEditBtnClick(sectionContent)}
            >
            </ProfileContent>

        ),
        default: (
            <>
                <section className={`card ${extraClass} ${sectionType}-card`}>
                    <HeaderCard  headerConfig={headerConfig}  handlebtnClick={handleAddBtnClick}></HeaderCard>
                    < div
                        id={sectionTitle}
                        className={`${sectionType}-detail card-content`}
                    >
                        {sectionContent && sectionContent.length > 0 && (
                            sectionContent.map((item) => (
                                <CardContent key={item.id} sectionType={sectionType} data={item} onEditBtnClick={() => handleEditBtnClick(item)} />
                            ))
                        ) }
                    </div>

                </section>
                <Button btnClass='toggle-btn' handlebtnClick={toggleClick}>
                    {expand ? "Show Less" : "Show More"}
                </Button>
            </>
        )
    };

    return (
        <>
            {sectionComponentsMapping[sectionType] || sectionComponentsMapping.default}
            {isModalOpen && (
                <Modal
                    onModalClose={handleModalClose}
                    type={sectionType}
                    editingItem={editingItem}
                >
                </Modal>
            )}

        </>
    );
}
export default Section;



