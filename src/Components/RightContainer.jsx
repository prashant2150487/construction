import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Checkbox,
  Chip,
  CircularProgress,
  Divider,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  Link,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import React from "react";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import CommentIcon from "@mui/icons-material/Comment";
import HomeIcon from "@mui/icons-material/Home";
import HelpIcon from "@mui/icons-material/Help";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import CreateIcon from "@mui/icons-material/Create";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import face from "./Images/OIP.jpeg"
function RightContainer() {
  return (
    <div>
      <Box sx={{ m: "15px" }}>
        <Stack direction="row" gap={0.5}>
          <Typography sx={{ color: "#000", fontSize: "14px", fontWeight: 600 }}>
            Everyone's Task
          </Typography>
          <Typography sx={{ color: "gray", fontSize: "14px" }}>
            for Today (3)
          </Typography>
        </Stack>
      </Box>
      <Box sx={{ m: "15px", border: "1px solid #ccc", p: 2, borderRadius: 1, borderLeft: '2px solid #a2cf6e' }}>
        <Box sx={{ display: "flex" }}>
          <Avatar
            variant="square"
            sx={{ borderRadius: 1, bgcolor: "#e65100", mr: 3, px: 0.5 }}
          >

            <AccessAlarmsIcon />
          </Avatar>

          <Stack sx={{ p: 0.5, mr: 4 }}>
            <Typography sx={{ fontSize: "12px", color: "gray" }}>
              TASK DATE
            </Typography>
            <Typography sx={{ fontSize: "14px", fontWeight: 600 }}>
              March 14
            </Typography>
          </Stack>
          <Stack sx={{ p: 0.5, mr: 14 }}>
            <Typography sx={{ fontSize: "12px", color: "gray" }}>
              TASK START TIME
            </Typography>
            <Typography sx={{ fontSize: "14px", fontWeight: 600 }}>
              08:30 PM
            </Typography>
          </Stack>
          <Stack sx={{ p: 0.5, mr: 4 }}>
            <Typography sx={{ fontSize: "12px", color: "gray" }}>
              DOOR CODE
            </Typography>
            <Typography sx={{ fontSize: "13px", fontWeight: 600 }}>
              1776
            </Typography>
          </Stack>

          <Stack sx={{ p: 0.5, mr: 4 }}>
            <Typography sx={{ fontSize: "12px", color: "gray" }}>
              GATE CODE
            </Typography>
            <Typography sx={{ fontSize: "14px", fontWeight: 600 }}>
              2345
            </Typography>
          </Stack>
          <Stack sx={{ p: 0.5, mr: 4 }}>
            <Typography sx={{ fontSize: "12px", color: "gray" }}>
              DIFFICULT PARKING
            </Typography>
            <Typography sx={{ fontSize: "14px", fontWeight: 600 }}>
              March 14
            </Typography>
          </Stack>
          <Stack sx={{ p: 0.5, mr: 4 }}>
            <Typography sx={{ fontSize: "12px", color: "gray" }}>
              RESTRICTED ACCESS
            </Typography>
            <Typography sx={{ fontSize: "14px", fontWeight: 600 }}>
              NO
            </Typography>
          </Stack>
        </Box>
        <Stack direction="row" gap={1} my={1}>
          <HomeIcon sx={{ color: "#ccc" }} />
          <Typography sx={{ fontWeight: 600 }}>
            Master Bathroom Shower install - Bathroom Remodel{" "}
          </Typography>
          <Chip
            label={<Typography sx={{ fontSize: "11px" }}>0185000</Typography>}
            size="small"
            sx={{ borderRadius: 2 }}
          />
          <HelpIcon sx={{ color: "#ccc" }} />
        </Stack>
        <Box sx={{ display: "flex" }}>
          <Box sx={{ mr: "2rem", ml: "0.5rem" }}>
            <Typography sx={{ fontSize: "13px", color: "gray" }}>
              Project
            </Typography>
            <Stack direction="row" gap={3} ml={1}>
              <FormControlLabel
                control={
                  <HomeIcon sx={{ fontSize: "15px", mr: 1, color: "#ccc" }} />
                }
                label={
                  <Typography sx={{ fontSize: "13px" }}>
                    Cameron williamson
                  </Typography>
                }
              />
              <FormControlLabel
                control={
                  <HomeIcon sx={{ fontSize: "15px", mr: 1, color: "#ccc" }} />
                }
                label={
                  <Typography sx={{ fontSize: "13px" }}>Referrel</Typography>
                }
              />
            </Stack>
            <Stack direction="row" gap={4} ml={1}>
              <FormControlLabel
                control={
                  <HomeIcon sx={{ fontSize: "15px", mr: 1, color: "#ccc" }} />
                }
                label={
                  <Typography sx={{ fontSize: "13px" }}>
                    Composite Roofing
                  </Typography>
                }
              />
              <FormControlLabel
                control={
                  <HomeIcon sx={{ fontSize: "15px", mr: 1, color: "#ccc" }} />
                }
                label={
                  <Typography sx={{ fontSize: "13px" }}>Active</Typography>
                }
              />
            </Stack>
          </Box>
          <Box sx={{ mr: "2rem" }}>
            <Typography sx={{ fontSize: "13px", color: "gray" }}>
              Contact
            </Typography>
            <Stack direction="row" gap={3} ml={1}>
              <FormControlLabel
                control={
                  <HomeIcon
                    sx={{ fontSize: "15px", mr: 1, color: "#fb8c00" }}
                  />
                }
                label={
                  <Typography sx={{ fontSize: "13px" }}>
                    (907) 555-0101
                  </Typography>
                }
              />
              <FormControlLabel
                control={
                  <HomeIcon
                    sx={{ fontSize: "15px", mr: 1, color: "#fb8c00" }}
                  />
                }
                label={
                  <Typography sx={{ fontSize: "13px" }}>
                    example@email.com
                  </Typography>
                }
              />
            </Stack>
            <Stack direction="row" gap={4} ml={1}>
              <FormControlLabel
                control={
                  <HomeIcon
                    sx={{ fontSize: "15px", mr: 1, color: "#fb8c00" }}
                  />
                }
                label={
                  <Typography sx={{ fontSize: "13px" }}>
                    4517 Washington Ave. Manchester,Kentucky39495
                  </Typography>
                }
              />
            </Stack>
          </Box>
          <Box sx={{ mr: "2rem" }}>
            <Typography sx={{ fontSize: "12px", color: "gray" }}>
              Task Day 1/4
            </Typography>
            <Typography sx={{ fontSize: "12px", color: "#000" }}>
              Task Day 1/4
            </Typography>
          </Box>
        </Box>
        <Divider sx={{ my: "10px" }} />
        <Grid container>
          <Grid xs={8}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box>
                <Typography sx={{ fontSize: "10px", color: "gray", mb: 1 }}>
                  DURATION
                </Typography>
                <Chip
                  size="small"
                  sx={{ borderRadius: "3px" }}
                  label={
                    <Typography sx={{ fontSize: "10px" }}>2 Hours</Typography>
                  }
                ></Chip>
              </Box>
              <Box>
                <Typography sx={{ fontSize: "10px", color: "gray", mb: 1 }}>
                  PROJECT MANAGERS
                </Typography>
                <Avatar size="small" src={face} sx={{ width: 25, height: 25 }}></Avatar>
              </Box>
              <Box>
                <Typography sx={{ fontSize: "10px", color: "gray", mb: 1 }}>
                  ESTIMATORS
                </Typography>
                <Avatar size="small" src={face} sx={{ width: 25, height: 25 }}></Avatar>
              </Box>
              <Box>
                <Typography sx={{ fontSize: "10px", color: "gray", mb: 1 }}>
                  ASSIGNED WORKERS
                </Typography>
                <AvatarGroup max={3}>
                  <Avatar src={face} sx={{ width: 25, height: 25 }} />
                  <Avatar src={face} sx={{ width: 25, height: 25 }} />
                  <Avatar src={face} sx={{ width: 25, height: 25 }} />
                </AvatarGroup>
              </Box>

              <Box>
                <Typography sx={{ fontSize: "10px", color: "gray", mb: 1 }}>
                  COMMENTS
                </Typography>
                <Stack direction="row" gap={1}>
                  <CommentIcon sx={{ fontSize: 16, m: 0.3 }} />
                  <Link sx={{ color: "gray", fontSize: 13 }}>
                    See 24 Comments
                  </Link>
                </Stack>
              </Box>
            </Box>
            <Typography sx={{ fontSize: "11px", color: "GrayText", my: 2 }}>
              NOTES
            </Typography>
            <Box sx={{ maxWidth: 420 }}>
              <Stack direction="row" gap={1}>
                <FiberManualRecordIcon sx={{ fontSize: 7, m: 0.5 }} />
                <Typography sx={{ fontSize: "11px", color: "GrayText" }}>
                  Installation of a traditional mud pan system to include a
                  curb, pre-slove,PVC linear and 3 part drain.
                </Typography>
              </Stack>
              <Stack direction="row" gap={1}>
                <FiberManualRecordIcon sx={{ fontSize: 7, m: 0.5 }} />
                <Typography sx={{ fontSize: "11px", color: "GrayText" }}>
                  Supply and install 1/2 compressed cement board on walls with
                  the seams taped and mudded.
                </Typography>
              </Stack>
              <Stack direction="row" gap={1}>
                <FiberManualRecordIcon sx={{ fontSize: 7, m: 0.5 }} />
                <Typography sx={{ fontSize: "11px", color: "GrayText" }}>
                  Application of a paint-on waterproofing membrane.
                </Typography>
              </Stack>
            </Box>
          </Grid>

          <Grid xs={3} sx={{ ml: 8 }}>
            <Typography sx={{ fontSize: "10px", color: "gray", mb: 1, ml: 2 }}>
              STEPS
            </Typography>
            <FormGroup sx={{ ml: 2 }}>
              <FormControlLabel
                control={<Checkbox size="small" />}
                label={
                  <Typography sx={{ fontSize: "12px" }}>
                    Take Before Picture
                  </Typography>
                }
              />
              <FormControlLabel
                control={<Checkbox size="small" />}
                label={
                  <Typography sx={{ fontSize: "12px" }}>
                    Complete The Work
                  </Typography>
                }
              />
              <FormControlLabel
                control={<Checkbox size="small" />}
                label={
                  <Typography sx={{ fontSize: "12px" }}>
                    Take After Picture
                  </Typography>
                }
              />
            </FormGroup>
            <FormControlLabel
              sx={{}}
              control={<Switch size="small" />}
              labelPlacement="start"
              label={
                <Typography sx={{ fontSize: "12px", color: "gray" }}>
                  Mark All Steps Complete
                </Typography>
              }
            />
          </Grid>
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
          <Button
            startIcon={<KeyboardArrowUpIcon sx={{ color: "#000" }} />}
            sx={{ fontSize: "12px", color: "#000" }}
          >
            SHOW LESS DETAILS
          </Button>
          <Stack direction="row" gap={1}>
            <IconButton
              size="small"
              sx={{ border: "1px solid gray", borderRadius: 2 }}
            >
              <CameraAltIcon />
            </IconButton>
            <IconButton
              size="small"
              sx={{ border: "1px solid gray", borderRadius: 2 }}
            >
              <CreateIcon />
            </IconButton>
            <IconButton
              size="small"
              sx={{ border: "1px solid gray", borderRadius: 2 }}
            >
              <CameraAltIcon />
            </IconButton>
            <IconButton
              size="small"
              sx={{ border: "1px solid gray", borderRadius: 2 }}
            >
              <MoreVertIcon />
            </IconButton>
          </Stack>
        </Box>
      </Box>
      <Box sx={{ m: "15px", border: "1px solid #ccc", p: 2, borderRadius: 1, borderLeft: '2px solid #ffac33' }}>
        <Box sx={{ display: "flex" }}>
          <Avatar
            variant="square"
            sx={{ borderRadius: 1, mr: 3, p: 0.5, bgcolor: "#000" }}
          >
            <Box sx={{ position: "relative", display: "inline-flex" }}>
              <CircularProgress
                variant="determinate"
                value={30}
                sx={{ color: "#4caf50" }}
              />
              <Box
                sx={{
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  position: "absolute",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="caption"
                  component="div"
                  sx={{ color: "#fff" }}
                >
                  30%
                </Typography>
              </Box>
            </Box>
          </Avatar>

          <Stack sx={{ p: 0.5, mr: 4 }}>
            <Typography sx={{ fontSize: "12px", color: "gray" }}>
              TASK DATE
            </Typography>
            <Typography sx={{ fontSize: "14px", fontWeight: 600 }}>
              March 14
            </Typography>
          </Stack>
          <Stack sx={{ p: 0.5, mr: 14 }}>
            <Typography sx={{ fontSize: "12px", color: "gray" }}>
              TASK START TIME
            </Typography>
            <Typography sx={{ fontSize: "14px", fontWeight: 600 }}>
              08:30 PM
            </Typography>
          </Stack>
          <Stack sx={{ p: 0.5, mr: 4 }}>
            <Typography sx={{ fontSize: "12px", color: "gray" }}>
              DOOR CODE
            </Typography>
            <Typography sx={{ fontSize: "13px", fontWeight: 600 }}>
              1776
            </Typography>
          </Stack>

          <Stack sx={{ p: 0.5, mr: 4 }}>
            <Typography sx={{ fontSize: "12px", color: "gray" }}>
              GATE CODE
            </Typography>
            <Typography sx={{ fontSize: "14px", fontWeight: 600 }}>
              2345
            </Typography>
          </Stack>
          <Stack sx={{ p: 0.5, mr: 4 }}>
            <Typography sx={{ fontSize: "12px", color: "gray" }}>
              DIFFICULT PARKING
            </Typography>
            <Typography sx={{ fontSize: "14px", fontWeight: 600 }}>
              March 14
            </Typography>
          </Stack>
          <Stack sx={{ p: 0.5, mr: 4 }}>
            <Typography sx={{ fontSize: "12px", color: "gray" }}>
              RESTRICTED ACCESS
            </Typography>
            <Typography sx={{ fontSize: "14px", fontWeight: 600 }}>
              NO
            </Typography>
          </Stack>
        </Box>
        <Stack direction="row" gap={1} my={1}>
          <HomeIcon sx={{ color: "#ccc" }} />
          <Typography sx={{ fontWeight: 600 }}>
            Master Bathroom Shower install - Bathroom Remodel{" "}
          </Typography>
          <Chip
            label={<Typography sx={{ fontSize: "11px" }}>0185000</Typography>}
            size="small"
            sx={{ borderRadius: 2 }}
          />
          <HelpIcon sx={{ color: "#ccc" }} />
        </Stack>
        <Box sx={{ display: "flex" }}>
          <Box sx={{ mr: "2rem", ml: "0.5rem" }}>
            <Typography sx={{ fontSize: "13px", color: "gray" }}>
              Project
            </Typography>
            <Stack direction="row" gap={3} ml={1}>
              <FormControlLabel
                control={
                  <HomeIcon sx={{ fontSize: "15px", mr: 1, color: "#ccc" }} />
                }
                label={
                  <Typography sx={{ fontSize: "13px" }}>
                    Cameron williamson
                  </Typography>
                }
              />
              <FormControlLabel
                control={
                  <HomeIcon sx={{ fontSize: "15px", mr: 1, color: "#ccc" }} />
                }
                label={
                  <Typography sx={{ fontSize: "13px" }}>Referrel</Typography>
                }
              />
            </Stack>
            <Stack direction="row" gap={4} ml={1}>
              <FormControlLabel
                control={
                  <HomeIcon sx={{ fontSize: "15px", mr: 1, color: "#ccc" }} />
                }
                label={
                  <Typography sx={{ fontSize: "13px" }}>
                    Composite Roofing
                  </Typography>
                }
              />
              <FormControlLabel
                control={
                  <HomeIcon sx={{ fontSize: "15px", mr: 1, color: "#ccc" }} />
                }
                label={
                  <Typography sx={{ fontSize: "13px" }}>Active</Typography>
                }
              />
            </Stack>
          </Box>
          <Box sx={{ mr: "2rem" }}>
            <Typography sx={{ fontSize: "13px", color: "gray" }}>
              Contact
            </Typography>
            <Stack direction="row" gap={3} ml={1}>
              <FormControlLabel
                control={
                  <HomeIcon
                    sx={{ fontSize: "15px", mr: 1, color: "#fb8c00" }}
                  />
                }
                label={
                  <Typography sx={{ fontSize: "13px" }}>
                    (907) 555-0101
                  </Typography>
                }
              />
              <FormControlLabel
                control={
                  <HomeIcon
                    sx={{ fontSize: "15px", mr: 1, color: "#fb8c00" }}
                  />
                }
                label={
                  <Typography sx={{ fontSize: "13px" }}>
                    example@email.com
                  </Typography>
                }
              />
            </Stack>
            <Stack direction="row" gap={4} ml={1}>
              <FormControlLabel
                control={
                  <HomeIcon
                    sx={{ fontSize: "15px", mr: 1, color: "#fb8c00" }}
                  />
                }
                label={
                  <Typography sx={{ fontSize: "13px" }}>
                    4517 Washington Ave. Manchester,Kentucky39495
                  </Typography>
                }
              />
            </Stack>
          </Box>
          <Box sx={{ mr: "2rem" }}>
            <Typography sx={{ fontSize: "12px", color: "gray" }}>
              Task Day 1/4
            </Typography>
            <Typography sx={{ fontSize: "12px", color: "#000" }}>
              Task Day 1/4
            </Typography>
          </Box>
        </Box>
        <Divider sx={{ my: "10px" }} />
        <Grid container>
          <Grid xs={8}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box>
                <Typography sx={{ fontSize: "10px", color: "gray", mb: 1 }}>
                  DURATION
                </Typography>
                <Chip
                  size="small"
                  sx={{ borderRadius: "3px" }}
                  label={
                    <Typography sx={{ fontSize: "10px" }}>2 Hours</Typography>
                  }
                ></Chip>
              </Box>
              <Box>
                <Typography sx={{ fontSize: "10px", color: "gray", mb: 1 }}>
                  PROJECT MANAGERS
                </Typography>
                <Avatar src={face} size="small" sx={{ width: 25, height: 25 }}></Avatar>
              </Box>
              <Box>
                <Typography sx={{ fontSize: "10px", color: "gray", mb: 1 }}>
                  ESTIMATORS
                </Typography>
                <Avatar size="small" src={face} sx={{ width: 25, height: 25 }}></Avatar>
              </Box>
              <Box>
                <Typography sx={{ fontSize: "10px", color: "gray", mb: 1 }}>
                  ASSIGNED WORKERS
                </Typography>
                <AvatarGroup max={3}>
                  <Avatar src={face} sx={{ width: 25, height: 25 }} />
                  <Avatar src={face} sx={{ width: 25, height: 25 }} />
                  <Avatar src={face} sx={{ width: 25, height: 25 }} />
                </AvatarGroup>
              </Box>

              <Box>
                <Typography sx={{ fontSize: "10px", color: "gray", mb: 1 }}>
                  COMMENTS
                </Typography>
                <Stack direction="row" gap={1}>
                  <CommentIcon sx={{ fontSize: 16, m: 0.3 }} />
                  <Link sx={{ color: "gray", fontSize: 13 }}>
                    See 24 Comments
                  </Link>
                </Stack>
              </Box>
            </Box>
            <Typography sx={{ fontSize: "11px", color: "GrayText", my: 2 }}>
              NOTES
            </Typography>
            <Box sx={{ maxWidth: 420 }}>
              <Stack direction="row" gap={1}>
                <FiberManualRecordIcon sx={{ fontSize: 7, m: 0.5 }} />
                <Typography sx={{ fontSize: "11px", color: "GrayText" }}>
                  Installation of a traditional mud pan system to include a
                  curb, pre-slove,PVC linear and 3 part drain.
                </Typography>
              </Stack>
              <Stack direction="row" gap={1}>
                <FiberManualRecordIcon sx={{ fontSize: 7, m: 0.5 }} />
                <Typography sx={{ fontSize: "11px", color: "GrayText" }}>
                  Supply and install 1/2 compressed cement board on walls with
                  the seams taped and mudded.
                </Typography>
              </Stack>
              <Stack direction="row" gap={1}>
                <FiberManualRecordIcon sx={{ fontSize: 7, m: 0.5 }} />
                <Typography sx={{ fontSize: "11px", color: "GrayText" }}>
                  Application of a paint-on waterproofing membrane.
                </Typography>
              </Stack>
            </Box>
          </Grid>

          <Grid xs={3} sx={{ ml: 8 }}>
            <Typography sx={{ fontSize: "10px", color: "gray", mb: 1, ml: 2 }}>
              STEPS
            </Typography>
            <FormGroup sx={{ ml: 2 }}>
              <FormControlLabel
                control={<Checkbox size="small" />}
                label={
                  <Typography sx={{ fontSize: "12px" }}>
                    Take Before Picture
                  </Typography>
                }
              />
              <FormControlLabel
                control={<Checkbox size="small" />}
                label={
                  <Typography sx={{ fontSize: "12px" }}>
                    Complete The Work
                  </Typography>
                }
              />
              <FormControlLabel
                control={<Checkbox size="small" />}
                label={
                  <Typography sx={{ fontSize: "12px" }}>
                    Take After Picture
                  </Typography>
                }
              />
            </FormGroup>
            <FormControlLabel
              sx={{}}
              control={<Switch size="small" />}
              labelPlacement="start"
              label={
                <Typography sx={{ fontSize: "12px", color: "gray" }}>
                  Mark All Steps Complete
                </Typography>
              }
            />
          </Grid>
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
          <Button
            startIcon={<KeyboardArrowUpIcon sx={{ color: "#000" }} />}
            sx={{ fontSize: "12px", color: "#000" }}
          >
            SHOW LESS DETAILS
          </Button>
          <Stack direction="row" gap={1}>
            <IconButton
              size="small"
              sx={{ border: "1px solid gray", borderRadius: 2 }}
            >
              <CameraAltIcon />
            </IconButton>
            <IconButton
              size="small"
              sx={{ border: "1px solid gray", borderRadius: 2 }}
            >
              <CreateIcon />
            </IconButton>
            <IconButton
              size="small"
              sx={{ border: "1px solid gray", borderRadius: 2 }}
            >
              <CameraAltIcon />
            </IconButton>
            <IconButton
              size="small"
              sx={{ border: "1px solid gray", borderRadius: 2 }}
            >
              <MoreVertIcon />
            </IconButton>
          </Stack>
        </Box>
      </Box>
    </div>
  );
}

export default RightContainer;
