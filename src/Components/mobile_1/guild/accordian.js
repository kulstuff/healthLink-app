import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import BottomNav from "../bottomnav";

const styles = theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  }
});

class ControlledExpansionPanels extends React.Component {
  state = {
    expanded: null
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false
    });
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    return (
      <div className={classes.root}>
        <div className="CalBox" style={{ textTransform: "uppercase" }}>
          CardioCrux
          <br />
          <br />
          Level 15
        </div>
        <ExpansionPanel
          expanded={expanded === "panel1"}
          onChange={this.handleChange("panel1")}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Cover 2500 Step</Typography>
            <Typography
              className={classes.secondaryHeading}
              style={{ marginLeft: "50px" }}
            >
              My Progress : 66%
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography
              style={{
                fontSize: "13px",
                color: "rgba(0,0,0,0.5)",
                marginLeft: "47%",
                marginTop: "-8%"
              }}
            >
              Shreyansh's Progress : 10%
              <br />
              Shruti's Progress : 100%
              <br />
              Dhawal's Progress : 40%
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === "panel2"}
          onChange={this.handleChange("panel2")}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>
              Cover 5000 Steps
            </Typography>
            <Typography
              className={classes.secondaryHeading}
              style={{ marginLeft: "50px" }}
            >
              My Progress : 66%
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography
              style={{
                fontSize: "13px",
                color: "rgba(0,0,0,0.5)",
                marginLeft: "47%",
                marginTop: "-8%"
              }}
            >
              Shreyansh's Progress : 10%
              <br />
              Shruti's Progress : 100%
              <br />
              Dhawal's Progress : 40%
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === "panel3"}
          onChange={this.handleChange("panel3")}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>
              Cover 10000 Steps
            </Typography>
            <Typography
              className={classes.secondaryHeading}
              style={{ marginLeft: "50px" }}
            >
              My Progress : 66%
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography
              style={{
                fontSize: "13px",
                color: "rgba(0,0,0,0.5)",
                marginLeft: "47%",
                marginTop: "-8%"
              }}
            >
              Shreyansh's Progress : 10%
              <br />
              Shruti's Progress : 100%
              <br />
              Dhawal's Progress : 40%
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === "panel4"}
          onChange={this.handleChange("panel4")}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>
              Drink 8 Glasses of Water
            </Typography>
            <Typography
              className={classes.secondaryHeading}
              style={{ marginLeft: "50px" }}
            >
              My Progress : 66%
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography
              style={{
                fontSize: "13px",
                color: "rgba(0,0,0,0.5)",
                marginLeft: "47%",
                marginTop: "-8%"
              }}
            >
              Shreyansh's Progress : 10%
              <br />
              Shruti's Progress : 100%
              <br />
              Dhawal's Progress : 40%
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === "panel4"}
          onChange={this.handleChange("panel4")}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>
              Get 7 Hours of Sleep
            </Typography>
            <Typography
              className={classes.secondaryHeading}
              style={{ marginLeft: "50px" }}
            >
              My Progress : 66%
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Shreyansh's Progress : 10%
              <br />
              Shruti's Progress : 100%
              <br />
              Dhawal's Progress : 40%
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === "panel4"}
          onChange={this.handleChange("panel4")}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>
              Consume around 3000 Calories
            </Typography>
            <Typography
              className={classes.secondaryHeading}
              style={{ marginLeft: "50px" }}
            >
              My Progress : 66%
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography
              style={{
                fontSize: "13px",
                color: "rgba(0,0,0,0.5)",
                marginLeft: "47%",
                marginTop: "-8%"
              }}
            >
              Shreyansh's Progress : 10%
              <br />
              Shruti's Progress : 100%
              <br />
              Dhawal's Progress : 40%
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <BottomNav />
      </div>
    );
  }
}

ControlledExpansionPanels.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ControlledExpansionPanels);
