import React, { useState } from "react";
import styled from "styled-components";
import DesktopDrawer from "../../components/Layout/Drawer/DesktopDrawer";
import BreadCrums from "../../components/common/BreadCrums";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import TabsButtonTwo from "../../components/common/TabsButtonTwo";
import ConnectAccount from "../../components/ConnectAccount/ConnectAccount";
import { Box,Stepper,Step,StepLabel, Typography } from "@mui/material";
import Campaign from "components/campaign center/new campaign/Campaign";
import AdSets from "../../components/campaign center/new campaign/AdSets";
import Ads from "../../components/campaign center/new campaign/Ads";
import TiktokCampaign from "components/campaign center/new campaign/tiktok/Campaign";
import Heading from "components/common/Heading";
import { useSelector,useDispatch } from "react-redux";
import StepButton from '@mui/material/StepButton';

const tabData = [
  {
    label: "Campaign",
    value: "campaign",
  },
  {
    label: "Ad sets",
    value: "adsets",
  },
  {
    label: "Ads",
    value: "ads",
  },
  {
    label: "Review",
    value: "review",
  },
];


//Stepper Data
const steps = [
  'Campaign',
  'Ad sets',
  'Ads',
];


const NewCampaign = () => {

  const {currentTabSlices,campaignSlices} = useSelector(res=>res);

  const [tabValue, setTabValue] = useState("Campaign");
  const [isConnected, setIsConnected] = useState(
    JSON.parse(localStorage.getItem("connectedAccounts"))?.connected_accounts
      ?.ad_account_connected
  );
  

  let activeStep = 0;
  let headingName = "Compaign";

  //Condition Rendering to Handle Current Tab

  if(currentTabSlices.currentTab === 2){
    headingName = "Ad sets";
    activeStep = 1
  }
  if(currentTabSlices.currentTab === 3){
    headingName = "Ads";
    activeStep = 2
    
  }

  return (
    <>
      <DesktopDrawer>
        <BreadCrums heading="Campaign Center" />
          {/* <Heading heading={headingName} /> */}

          <Box sx={{
              width: '50%',
              my: 2
            }}
          >
          <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel color="inherit">
               <Typography variant="body1" >{label}</Typography>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>

    
        {isConnected !== 0 ? (
          <NewCampaignStyled>
            {/* <Box>
              <TabContext value={tabValue}>
                <Box sx={{ borderBottom: 4 }} className="border">
                  <TabsButtonTwo setValue={setTabValue} data={tabData} />
                </Box>
                <TabPanel value="campaign" sx={{ p: 0, py: 3 }}>
                  <TiktokCampaign  />
                </TabPanel>
                <TabPanel value="adsets" sx={{ p: 0, py: 3 }}>
                  <AdSets />
                </TabPanel>
                <TabPanel value="ads" sx={{ p: 0, py: 3 }}>
                  <Ads />
                </TabPanel>
              </TabContext>
            </Box> */}
            
            {
              currentTabSlices.currentTab === 1 && <TiktokCampaign  />
            }
            {
              currentTabSlices.currentTab === 2 && <AdSets  />
            }
            {
              currentTabSlices.currentTab === 3 && <Ads  />
            }

          </NewCampaignStyled>
        ) : (
          <ConnectAccount />
        )}
      </DesktopDrawer>
    </>
  );
};

export default NewCampaign;

const NewCampaignStyled = styled.section``;
