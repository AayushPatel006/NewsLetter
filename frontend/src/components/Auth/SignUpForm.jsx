import {
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";
import {
  Branding,
  BrandingInfo,
  BrandingSubtitle,
  BrandingTitle,
  ForgotLink,
  GradientBackground,
  ImageLogo,
  LoginCard,
  LoginForm as LF,
  LoginTitle,
  SubmitButton,
} from "./LoginItems";
import { PropagateLoader } from "react-spinners";

export default function SignUp({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [type, setType] = useState("volunteer");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    let obj;
    if (type === "volunteer") {
      obj = {
        email,
        password,
        name,
        age,
      };
    } else {
      obj = {
        email,
        password,
        name,
        city,
      };
    }
    await onSubmit(obj, type);
    setSubmitting(false);
  };

  const handleChange = (e) => {
    setType(e.target.value);
  };

  return (
    <GradientBackground style={{ background: "url(/assets/space.jfif)" }}>
      <LoginCard>
        <Branding>
          <ImageLogo
            src="/assets/logo.png"
            style={{ borderRadius: "50%", border: "4px solid white" }}
          />
          <BrandingTitle>News App!</BrandingTitle>
          <BrandingSubtitle style={{ fontSize: "22px" }}>
            Sign Up
          </BrandingSubtitle>
          <BrandingInfo>
            Follow latest developments in the world. Don't fall behind. <br />
          </BrandingInfo>
        </Branding>
        <LF onSubmit={handleFormSubmit}>
          <LoginTitle style={{ marginBottom: "12px" }}>Sign Up</LoginTitle>

          <TextField
            fullWidth
            margin="dense"
            label="Name"
            color="secondary"
            type="text"
            variant="standard"
            value={name}
            onChange={handleNameChange}
            sx={{ fontFamily: "Outfit" }}
            required
          />
          <TextField
            fullWidth
            margin="dense"
            label="Email"
            color="secondary"
            type="email"
            variant="standard"
            value={email}
            onChange={handleEmailChange}
            sx={{ fontFamily: "Outfit" }}
            required
          />
          <TextField
            fullWidth
            margin="dense"
            label="Password"
            color="secondary"
            type="password"
            variant="standard"
            value={password}
            onChange={handlePasswordChange}
            sx={{ fontFamily: "Outfit" }}
            required
          />

          {submitting ? (
            <ButtonLoading />
          ) : (
            <SubmitButton type="submit" disabled={submitting}>
              Register
            </SubmitButton>
          )}
          <div
            style={{
              marginTop: "2rem",
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ForgotLink to={"/login"}>Log In</ForgotLink>
          </div>
        </LF>
      </LoginCard>
    </GradientBackground>
  );
}
export const ButtonLoading = ({ color = "black", marginTop = "1.6rem" }) => {
  return (
    <div
      style={{
        marginTop: marginTop,
        width: "100%",
        height: "43px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <PropagateLoader color={color} />
    </div>
  );
};
