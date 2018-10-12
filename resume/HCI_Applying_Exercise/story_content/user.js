function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6i3yPbcLbSW":
        Script1();
        break;
  }
}

function Script1()
{
  var email="PartnerUniversity@vmware.com";

var subject = "Technical Issue with VSP Hyper-Converged Infrastructure";

var body_start = "This is the problem I am having:";

var mailto_link = 'mailto:' +email+'?subject='+subject+'&body='+encodeURIComponent(body_start);

win = window.open(mailto_link, 'emailWin');
}

