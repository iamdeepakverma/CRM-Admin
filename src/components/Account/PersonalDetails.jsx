import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box"

function PersonalDetails() {

  const utypes = [
    {
      value: "Super Admin",
      label: "Super Admin",
    },
    {
      value: "Admin",
      label: "Admin",
    },
    {
      value: "Manager",
      label: "Manager",
    },
    {
      value: "User",
      label: "User",
    },
  ];
  return (
    <>
    <Grid container spacing={2} sx={{ mt: "200" }}>
        <Grid item xs={6}>
          <Grid container spacing={2} sx={{ mt: "20" }}>
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h6" align="left">
                    Personal Information
                  </Typography>
                  <Divider sx={{ mt: 2 }} />
                  <Grid container spacing={2} sx={{ mt: "20" }}>
                    <Grid item xs={6}>
                      <TextField
                        label="Name"
                        value="P Kumar"
                        name="name"
                        sx={{ marginTop: "30px", minWidth: "100%" }}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        label="Location"
                        value="India"
                        name="location"
                        sx={{ marginTop: "30px", minWidth: "100%" }}
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>
                  <Grid container spacing={2} sx={{ mt: "20" }}>
                    <Grid item xs={12}>
                      <TextField
                        id="outlined-multiline-flexible"
                        label="Bio"
                        sx={{ marginTop: "30px", minWidth: "100%" }}
                        multiline
                        rows={3}
                      />
                    </Grid>
                  </Grid>
                  <Grid container spacing={2} sx={{ mt: "20" }}>
                    <Grid item xs={6}>
                      <TextField
                        label="User Type"
                        name="type"
                        value="Super Admin"
                        select
                        sx={{ marginTop: "30px", minWidth: "100%" }}
                        variant="outlined"
                      >
                        {utypes.map((option) => (
                          <option key={option.value} value={option.value}>
                            &nbsp;&nbsp;{option.label}
                          </option>
                        ))}
                      </TextField>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid container spacing={2} sx={{ mt: "200" }}>
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h6" align="left">
                    Contact Information
                  </Typography>
                  <Divider sx={{ mt: 2 }} />
                  <Grid container spacing={2} sx={{ mt: "20" }}>
                    <Grid item xs={6}>
                      <TextField
                        label="Contact Phone"
                        value="91999999999"
                        name="phone"
                        type="number"
                        sx={{ marginTop: "30px", minWidth: "100%" }}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        label="Email"
                        value="code@codingmstr.com"
                        name="email"
                        type="email"
                        sx={{ marginTop: "30px", minWidth: "100%" }}
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>
                  <Grid container spacing={2} sx={{ mt: "20" }}>
                    <Grid item xs={12}>
                      <TextField
                        label="Profile URL"
                        name="url"
                        value="https://codingmstr.com"
                        sx={{ marginTop: "30px", minWidth: "100%" }}
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>
                  <Grid container spacing={2} sx={{ mt: "20" }}>
                    <Grid item xs={12}>
                      <TextField
                        id="outlined-multiline-flexible"
                        label="Address"
                        sx={{ marginTop: "30px", minWidth: "100%" }}
                        multiline
                        rows={3}
                      />
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Box height={20} />
      {/* <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <CardContent>
              <Card>
                <Typography variant="h5" component="h2">
                  Personal Informatio
                </Typography>
                <Box>
                  <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    defaultValue="Hello World"
                  />
                  <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    defaultValue="Hello World"
                  />
                </Box>
              </Card>
            </CardContent>
          </Grid>
          <Grid item xs={6}></Grid>
        </Grid>
      </Box> */}
    </>
  );
}

export default PersonalDetails;
