import React, {useState} from 'react'
import Tabs from '../../../Atoms/Tabs'
import Tab from '../../../Atoms/Tabs/Tab'
import TabDetails from '../../../Atoms/Tabs/Tab/TabDetails'
import { TabHeader } from '../../../Atoms/Tabs/Tab/TabHeader'
import { StyleOtherOptions } from './OtherOptions.style'
import { Link } from 'react-router-dom'

const OtherOptions = () => {
  const [value, setvalue] = useState(null)

  const handleChange = (newValue) => {
    setvalue(newValue);
  };

  const otherOptions = [
    {
      name: "Order online",
      options: [
        { foodname: "Beverages food near me", link: "/" },
        { foodname: "Beverages food near me", link: "/" },
        { foodname: "Beverages food near me", link: "/" },
        { foodname: "Beverages food near me", link: "/" },
        { foodname: "Beverages food near me", link: "/" },
        { foodname: "Beverages food near me", link: "/" },
        { foodname: "Beverages food near me", link: "/" },
        { foodname: "Beverages food near me", link: "/" },
        { foodname: "Beverages food near me", link: "/" },
        { foodname: "Beverages food near me", link: "/" },
        { foodname: "Beverages food near me", link: "/" },
        { foodname: "Beverages food near me", link: "/" },
      ]
    },
    {
      name: "Party",
      options: [
        { foodname: "Beverages food near me", link: "/" },
        { foodname: "Beverages food near me", link: "/" },
        { foodname: "Beverages food near me", link: "/" },
        { foodname: "Beverages food near me", link: "/" },
        { foodname: "Beverages food near me", link: "/" },
        { foodname: "Beverages food near me", link: "/" },
        { foodname: "Beverages food near me", link: "/" },
        { foodname: "Beverages food near me", link: "/" },
        { foodname: "Beverages food near me", link: "/" },
        { foodname: "Beverages food near me", link: "/" },
        { foodname: "Beverages food near me", link: "/" },
        { foodname: "Beverages food near me", link: "/" },
      ]
    },
    {
      name: "Bravarages",
      options: [
        { foodname: "Beverages food near me", link: "/" },
        { foodname: "Beverages food near me", link: "/" },
        { foodname: "Beverages food near me", link: "/" },
        { foodname: "Beverages food near me", link: "/" },
        { foodname: "Beverages food near me", link: "/" },
        { foodname: "Beverages food near me", link: "/" },
        { foodname: "Beverages food near me", link: "/" },
        { foodname: "Beverages food near me", link: "/" },
        { foodname: "Beverages food near me", link: "/" },
        { foodname: "Beverages food near me", link: "/" },
        { foodname: "Beverages food near me", link: "/" },
        { foodname: "Beverages food near me", link: "/" },
      ]
    },
    {
      name: "Order online",
      options: [
        { foodname: "Beverages food near me", link: "/" },
        { foodname: "Beverages food near me", link: "/" },
        { foodname: "Beverages food near me", link: "/" },
        { foodname: "Beverages food near me", link: "/" },
        { foodname: "Beverages food near me", link: "/" },
        { foodname: "Beverages food near me", link: "/" },
        { foodname: "Beverages food near me", link: "/" },
        { foodname: "Beverages food near me", link: "/" },
        { foodname: "Beverages food near me", link: "/" },
        { foodname: "Beverages food near me", link: "/" },
        { foodname: "Beverages food near me", link: "/" },
        { foodname: "Beverages food near me", link: "/" },
      ]
    },
  ]
  return (
    <Tabs>
      {
        otherOptions.map((otheroption, index) => <Tab key={index}>
          <TabHeader value={index} onChange={handleChange} open={value}>
            <h3>{otheroption.name}</h3>
          </TabHeader>
          <TabDetails value={index} open={value}>
            <StyleOtherOptions><li><span class="dots"></span>
              <Link to="/">Beverages food near me</Link></li><li><span class="dots"></span>
                <Link to="/">Beverages food near me</Link></li><li><span class="dots"></span>
                <Link to="/">Beverages food near me</Link></li><li><span class="dots"></span>
                <Link to="/">Beverages food near me</Link></li><li><span class="dots"></span>
                <Link to="/">Beverages food near me</Link></li><li><span class="dots"></span>
                <Link to="/">Beverages food near me</Link></li><li><span class="dots"></span>
                <Link to="/">Beverages food near me</Link></li><li><span class="dots"></span>
                <Link to="/">Beverages food near me</Link></li><li><span class="dots"></span>
                <Link to="/">Beverages food near me</Link></li><li><span class="dots"></span>
                <Link to="/">Beverages food near me</Link></li><li><span class="dots"></span>
                <Link to="/">Beverages food near me</Link></li><li><span class="dots"></span>
                <Link to="/">Beverages food near me</Link></li><li><span class="dots"></span>
                <Link to="/">Beverages food near me</Link></li><li><span class="dots"></span>
                <Link to="/">Beverages food near me</Link></li><li><span class="dots"></span>
                <Link to="/">Beverages food near me</Link></li><li><span class="dots"></span>
                <Link to="/">Beverages food near me</Link></li>
            </StyleOtherOptions>
          </TabDetails>
        </Tab>)
      }
    </Tabs>
  )
}

export default OtherOptions