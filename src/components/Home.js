import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
    return (
        <div>
            <Container>
                <Section
                    title="Model S"
                    description="Order Online for Touchless Delivery !!"
                    backgroundImage="model-s.jpg"
                    leftBtnText="Custom Order"
                    rightBtnText="Existing Inventory"
                />
                <Section
                title="Model Y"
                    description="Order Online for Touchless Delivery !!"
                    backgroundImage="model-y.jpg"
                    leftBtnText="Custom Order"
                    rightBtnText="Existing Inventory"
                />
                <Section
                    title="Model 3"
                    description="Order Online for Touchless Delivery !!"
                    backgroundImage="model-3.jpg"
                    leftBtnText="Custom Order"
                    rightBtnText="Existing Inventory"
                />
                <Section
                    title="Model X"
                    description="Order Online for Touchless Delivery !!"
                    backgroundImage="model-x.jpg"
                    leftBtnText="Custom Order"
                    rightBtnText="Existing Inventory"
                
                />
                <Section
                     title="Lowest Cost Solar Panels in US."
                    description="Money back Guarantee ."
                    backgroundImage="solar-panel.jpg"
                    leftBtnText=" Order Now"
                    rightBtnText="Learn More"
                />

                 <Section
                     title="Solar for New Roofs."
                    description="Money back Guarantee ."
                    backgroundImage="solar-roof.jpg"
                   leftBtnText=" Order Now"
                    rightBtnText="Learn More"
                />

                 <Section
                     title="Accessories ."
                    description="Money back Guarantee ."
                    backgroundImage="accessories.jpg"
                   leftBtnText=" Shop Now"
                    
                />
                
            </Container>
        </div>
    )
}

export default Home

const Container = styled.div`
height:100vh;
`
