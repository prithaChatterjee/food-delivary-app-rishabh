import React from 'react'
import Card from '../../Atoms/card';
import CardBody from '../../Atoms/Cardbody';
import Cardfooter from '../../Atoms/Cardfooter';
import LinkPrimary from '../../Atoms/linkPrimary';

export const CategoryItems = ({name, img, route}) => {
    return (
        <LinkPrimary style={{fontSize: "25px", fontWeight: "400"}} to={"/"}>
            <Card>
                <CardBody>
                    <img src={img} width="100%" height="100%" alt="" />
                </CardBody>
                <Cardfooter>{name}</Cardfooter>
            </Card>
        </LinkPrimary>
    )
}
