import React, { useState } from "react";
import DesktopDrawer from "../../components/Layout/Drawer/DesktopDrawer";
import BreadCrums from "../../components/common/BreadCrums";
import { INSTANCE } from "../../config/axiosInstance";
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";
// import ImageUploading from "react-images-uploading";
import {
  Box,
  Typography,
  Tab,
  Grid,
  TextField,
  Autocomplete,
  InputBase,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
} from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import {
  Facebook,
  Google,
  Videocam,
  AddPhotoAlternate,
  TextFields,
  AddCircle,
} from "@mui/icons-material";
import styled from "styled-components";
import TabsButton from "../../components/common/TabsButton";
import SelectMenu from "../../components/common/SelectMenu";
import Heading from "../../components/common/Heading";
import TiktokIcon from "../../components/common/TiktokIcon";
import CustomTextField from "../../components/common/CustomTextField";
import CustomAutoComplete from "../../components/common/AutoComplete";
import FullScreenLoader from "../../components/common/FullScreenLoader";
import { Toast } from "../../components/common/Toast";
import { useNavigate } from "react-router-dom";

const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
];
const newtorkData = [
  {
    heading: "Facebook Ads",
    icon: Facebook,
    position: "start",
    state: "facebook",
  },
  {
    heading: "Google Ads",
    icon: Google,
    position: "start",
    state: "google",
  },
  {
    heading: "Tiktok Ads",
    icon: TiktokIcon,
    position: "start",
    state: "tiktok",
  },
];
const creativeTypeData = [
  {
    heading: "Video",
    icon: Videocam,
    position: "start",
    state: "video",
  },
  {
    heading: "Image",
    icon: AddPhotoAlternate,
    position: "start",
    state: "image",
  },
  {
    heading: "Text",
    icon: TextFields,
    position: "start",
    state: "text",
  },
];
const assetSizeData = [
  {
    heading: "9:16",
    icon: Videocam,
    position: "bottom",
    state: "9:16",
  },
  {
    heading: "16:9",
    icon: Videocam,
    position: "bottom",
    state: "16:9",
  },
  {
    heading: "1:1",
    icon: Videocam,
    position: "bottom",
    state: "1:1",
  },
  {
    heading: "4:5",
    icon: Videocam,
    position: "bottom",
    state: "4:5",
  },
];
const NewCreative = () => {
  const navigate = useNavigate();
  const [network, setNetwork] = useState("facebook");
  const [creativeType, setCreativeType] = useState("video");
  const [tags, setTags] = useState([]);
  const [assetSize, setAssetSize] = useState("9:16");
  const [creativePackName, setCreativePackName] = useState("");
  const [youtubeTitle, setYoutubeTitle] = useState("");
  const [youtubeDescription, setYoutubeDescription] = useState("");
  const [audience, setAudience] = useState("yes");
  const [visibility, setVisibility] = useState("0");
  const [images, setImages] = useState(null);
  const [youtubeLink, setYoutubeLink] = useState("");
  const [youtubeUploader, setYoutubeUploader] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // const [creativeAssets, setCreativeAssets] = useState("");
  const maxNumber = 69;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
  const saveCreative = async () => {
    setIsLoading(true);
    console.log(tags, "audience");
    let data = new FormData();
    data.append("creative_platform", network);
    data.append("creative_type", creativeType);
    data.append("creative_pack_name", creativePackName.name);
    data.append("creative_size", assetSize);
    data.append("creative_youtube_link", youtubeLink.name);
    data.append("creative_youtube_uploader", youtubeUploader.name);
    data.append("creative_youtube_title", youtubeTitle.name);
    data.append("creative_youtube_description", youtubeDescription.name);
    data.append("creative_file", images);
    data.append("creative_audience", audience ? "1" : "0");
    data.append("creative_visibility", visibility);
    data.append("tags", JSON.stringify(tags));
    try {
      const response = await INSTANCE.post("/creative", data);
      console.log(response);
      setIsLoading(false);
      Toast("success", "Creative created successfully");
      navigate("/existing-creative");
    } catch (error) {
      setIsLoading(false);
      Toast("error", "Something went wrong try again lator");

      // alert("Something went wrong while submitting code.Please try later.");
    }
  };
  const onImageChange = ({ currentTarget: input }) => {
    if (input.files && input.files[0]) {
      const files = input.files[0];
      const name = files.type;
      if (files.name.match(/\.(jpg|jpeg|png|PNG|JPEG|JPG)$/)) {
        const url = URL.createObjectURL(files);
        // setCategoryImg(url);
        // setCategoryImageFile(files);
        setImages(files);
      } else {
        setImages(null);
        // toast.error("You are uploading incorrect format");
      }
    }
  };
  const handleChange = (event, newValue) => {
    setNetwork(newValue);
  };

  const creativeTypeHandler = (event, newValue) => {
    setCreativeType(newValue);
  };
  return (
    <>
      <DesktopDrawer>
        {isLoading && <FullScreenLoader />}
        <NewCreativeStyled>
          <BreadCrums heading="Creative Center" link="New Creative" />
          {/* main wrapper */}
          <Box sx={{ py: 2 }}>
            {/* Select Network tab   */}
            <Box>
              <Heading heading="Select your Ad Network" />
              <Box sx={{ pb: 1 }}>
                <TabsButton
                  value={network}
                  setValue={setNetwork}
                  data={newtorkData}
                />
              </Box>
            </Box>
            {/* Select creative type tab   */}
            <Box>
              <Heading heading="Creative Type" />
              <Box sx={{ pb: 1 }}>
                <TabsButton
                  value={creativeType}
                  setValue={setCreativeType}
                  data={creativeTypeData}
                />
              </Box>
            </Box>
            {/* Creative packman input field  */}
            <Box sx={{ maxWidth: "450px", py: 1 }}>
              <Heading heading="Creative Pack Name" />
              <CustomTextField
                placeholder="Video-fake Gameplay-Hoo1-CTADownload"
                setValue={setCreativePackName}
                data={creativePackName}
                name={"name"}
              />
            </Box>
            {/* Tag  */}
            <Box sx={{ py: 1 }}>
              <Box sx={{ maxWidth: "450px" }}>
                <Heading heading="Tags" />
                <CustomAutoComplete placeholder="Select Tags" />
              </Box>
              <Box sx={{ pt: 3, width: "100%" }}>
                <Typography
                  variant="body"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                  className="text"
                >
                  <AddCircle sx={{ color: "var(--main-color)", mr: 1 }} />
                  Create a new Tag
                </Typography>
              </Box>
            </Box>
            {/*Selected Tag  */}
            <Box
              className="text"
              sx={{
                py: 2,
                maxWidth: "450px",
                "& .react-tag-input": {
                  borderColor: "inherit !important",
                  background: "inherit",
                  color: "inherit",
                },
                "& .react-tag-input__tag": {
                  background: "var(--main-color)",
                  color: "#fff",
                },
                "& .react-tag-input__tag__remove": {
                  background: "var(--main-color)",
                  "&:before, :after": {
                    backgroundColor: "#fff",
                  },
                },
              }}
            >
              <Heading heading="Selected Tags" />
              <ReactTagInput
                tags={tags}
                onChange={(newTags) => setTags(newTags)}
                className="primary_color aaaaaaaaaaaaaaa"
              />
            </Box>
            {/*Select Asset Size  */}
            <Box sx={{ py: 2 }}>
              <Heading heading="Select Asset Size" />
              <TabsButton
                value={assetSize}
                setValue={setAssetSize}
                data={assetSizeData}
              />
            </Box>
            {/*Creative Asset Size  */}
            {/* <Box sx={{ py: 2 }}>
              <Heading heading="Creative Assets" />
              <TabsButton
                value={creativeAssets}
                setValue={setCreativeAssets}
                data={assetSizeData}
              />
            </Box> */}
            {/* Select Youtube Channel  */}
            <Box sx={{ maxWidth: "450px", py: 1 }}>
              <Heading heading="Youtube Uploader" />
              <CustomTextField
                placeholder="Select youtube channel"
                setValue={setYoutubeUploader}
                data={youtubeUploader}
                name={"name"}
              />
            </Box>
            {/* Youtube title input field  */}
            <Box sx={{ py: 2, maxWidth: "450px" }}>
              <Heading heading="Youtube Title" />
              <CustomTextField
                placeholder="Video-fake Gameplay-Hoo1-CTADownload"
                setValue={setYoutubeTitle}
                data={youtubeTitle}
                name={"name"}
              />
            </Box>
            {/* Youtube Descripton input field  */}
            <Box sx={{ py: 2, maxWidth: "450px" }}>
              <Heading heading="YouTube Description (Optional)" />
              <CustomTextField
                placeholder="Description"
                setValue={setYoutubeDescription}
                data={youtubeDescription}
                name={"name"}
              />
            </Box>
            {/* Upload your thumbnail  */}
            <Box sx={{ py: 2 }}>
              <Heading heading="Upload your Thumbnail" />
              <Box
                sx={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}
              >
                <Button
                  variant="contained"
                  component="label"
                  className="btn"
                  sx={{ mr: 2, mb: 2 }}
                >
                  Upload Thumbnail
                  <input
                    hidden
                    accept="image/*"
                    type="file"
                    onChange={(e) => onImageChange(e)}
                  />
                </Button>
                {images ? (
                  <img
                    style={{ maxWidth: 200, maxHeight: 150 }}
                    src={URL.createObjectURL(images)}
                    alt="thumbnail"
                    // className="border"
                  />
                ) : (
                  <Box
                    className="box_shadow primary_color"
                    sx={{
                      my: 2,
                      p: 3,
                      borderRadius: "5px",
                      height: "107px",
                      width: "145px",
                      display: "flex",
                      justifyContent: "center",
                      objectFit: "cover",
                    }}
                  >
                    <AddPhotoAlternate sx={{ fontSize: "4rem" }} />
                  </Box>
                )}
                {/* <div className="App">
                <ImageUploading
                  multiple
                  value={images}
                  onChange={onChange}
                  maxNumber={maxNumber}
                  dataURLKey="data_url"
                >
                  {({
                    imageList,
                    onImageUpload,
                    onImageRemoveAll,
                    onImageUpdate,
                    onImageRemove,
                    isDragging,
                    dragProps,
                  }) => (
                    // write your building UI
                    <div className="upload__image-wrapper">
                      <button
                        style={isDragging ? { color: "red" } : undefined}
                        onClick={onImageUpload}
                        {...dragProps}
                      >
                        Click or Drop here
                      </button>
                      &nbsp;
                      <button onClick={onImageRemoveAll}>
                        Remove all images
                      </button>
                      {imageList.map((image, index) => (
                        <div key={index} className="image-item">
                          <img src={image["data_url"]} alt="" width="100" />
                          <div className="image-item__btn-wrapper">
                            <button onClick={() => onImageUpdate(index)}>
                              Update
                            </button>
                            <button onClick={() => onImageRemove(index)}>
                              Remove
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </ImageUploading>
              </div> */}
              </Box>
            </Box>
            {/* Select List */}
            <Box sx={{ py: 2 }}>
              <Heading heading="Lists" />
              <Box sx={{ maxWidth: "450px" }}>
                <SelectMenu placeholder="Select Youtube List" />
              </Box>
            </Box>
            {/* children radio button  */}
            <Box sx={{ py: 2 }}>
              <FormControl>
                <FormLabel
                  id="chidren-radio-buttons-group-label"
                  className="text"
                  sx={{ fontWeight: "bold" }}
                >
                  Audience ~is it intended for children ?
                </FormLabel>
                <RadioGroup
                  aria-labelledby="chidren-radio-buttons-group-label"
                  defaultValue="yes"
                  name="radio-buttons-group"
                  onChange={(e) => setAudience(e.target.value)}
                  sx={{
                    "& .Mui-checked": {
                      color: "var(--main-color) !important",
                    },
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", py: 1 }}>
                    <FormControlLabel
                      value="yes"
                      label="Yes"
                      control={<Radio className="text" />}
                      className="text"
                    />
                    <FormControlLabel
                      label="No"
                      value="no"
                      control={<Radio className="text" />}
                      className="text"
                    />
                  </Box>
                </RadioGroup>
              </FormControl>
            </Box>
            {/* Visibility radio button  */}
            <Box sx={{ py: 2 }}>
              <FormControl>
                <FormLabel
                  id="visibility-radio-buttons-group-label"
                  className="text"
                  sx={{ fontWeight: "bold" }}
                >
                  Visibility
                </FormLabel>
                <RadioGroup
                  aria-labelledby="visibility-radio-buttons-group-label"
                  defaultValue="0"
                  name="radio-buttons-group"
                  onChange={(e) => setVisibility(e.target.value)}
                  sx={{
                    "& .Mui-checked": {
                      color: "var(--main-color) !important",
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      py: 1,
                      flexWrap: "wrap",
                    }}
                  >
                    <FormControlLabel
                      value="0"
                      label="Private"
                      control={<Radio className="text" />}
                      className="text"
                    />
                    {/* <FormControlLabel
                      label="Hidden"
                      value="1"
                      control={<Radio className="text" />}
                      className="text"
                    /> */}
                    <FormControlLabel
                      label="Public"
                      value="1"
                      control={<Radio className="text" />}
                      className="text"
                    />
                  </Box>
                </RadioGroup>
              </FormControl>
            </Box>
            {/* Get youtube Link  */}
            <Box
              sx={{
                py: 2,
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <Button variant="contained" className="btn" sx={{ mr: 3 }}>
                Get your youtube link
              </Button>
              <Box sx={{ width: "300px", py: 2 }}>
                <CustomTextField
                  placeholder="Get your Youtube Link"
                  setValue={setYoutubeLink}
                  data={youtubeLink}
                  name={"name"}
                />
              </Box>
            </Box>
            {/* Btn  */}
            <Button
              variant="contained"
              className="btn"
              sx={{ mb: 3 }}
              onClick={() => saveCreative()}
            >
              Save Creative Pack
            </Button>
          </Box>
        </NewCreativeStyled>
      </DesktopDrawer>
    </>
  );
};

export default NewCreative;

const NewCreativeStyled = styled.section`
  .pack_man_input {
    .MuiOutlinedInput-root {
      &:hover fieldset {
        border-color: inherit;
      }
      &.Mui-focused fieldset {
        border-color: inherit;
      }
    }
  }
`;
