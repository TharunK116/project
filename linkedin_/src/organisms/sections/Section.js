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
import sortByStartDate from "../../utils/sortData";


function Section({ title, type, data }) {

    const [expand, setExpand] = useState(false);
    const extraClass = expand ? "card-expand" : "";
    const { handleEditItem, editingItem } = useModalContext();
    const { isModalOpen, handleAddBtnClick, handleModalClose, handleEditBtnClick } = useModal(handleEditItem);
    function toggleClick() {
        setExpand((prev) => !prev);
    }
    useEffect(() => {
        document.body.style.overflow = isModalOpen ? 'hidden' : 'unset';
    }, [isModalOpen]);

    const sectionComponentsMapping = {
        interests: (
            <section className={`${type}-card card`}>
                <Interests title={title} info={data}></Interests>
            </section>
        ),
        activity: (
            <section id="Activity" className={`${type}-card card`}>
                <ActivitySection
                    title={title}
                    info={data}
                    handleclick={handleAddBtnClick}
                >
                </ActivitySection>
            </section>
        ),
        analytics: (
            <section className="${type}-card` card">
                <AnalyticsSection
                    info={data}
                    title={title}
                >
                </AnalyticsSection>
            </section>
        ),
        profile: (
            < ProfileContent
                info={data}
                onEditBtnClick={() => handleEditBtnClick(data)}
            >
            </ProfileContent>

        ),
        default: (
            <>
                <section className={`card ${extraClass} ${type}-card`}>
                    <HeaderCard classname='fa-solid fa-add' title={title} handleclick={handleAddBtnClick}></HeaderCard>
                    < div
                        id={title}
                        className={`${type}-detail card-content`}
                    >
                        {data && data.length > 0 && (
                            data.map((item) => (
                                <CardContent key={item.id} type={type} data={item} onEditBtnClick={() => handleEditBtnClick(item)} />
                            ))
                        ) }
                    </div>

                </section>
                <Button classname='toggle-btn' handleclick={toggleClick}>
                    {expand ? "Show Less" : "Show More"}
                </Button>
            </>
        )
    };

    return (
        <>
            {sectionComponentsMapping[type] || sectionComponentsMapping.default}
            {isModalOpen && (
                <Modal
                    onModalClose={handleModalClose}
                    type={type}
                    editingItem={editingItem}
                >
                </Modal>
            )}

        </>
    );
}
export default Section;



