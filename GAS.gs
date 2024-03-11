function doPost(e) {
  try {
    var params = e.parameter; // If you're sending data as application/x-www-form-urlencoded
    // Or, if you're sending JSON:
    // var jsonData = JSON.parse(e.postData.contents);

    var form = FormApp.openById("1J9WwX5DhPFdqtDPyoA3ZHWaLJesIIFLmJ6V8UBD6mCY");
    var items = form.getItems();
    console.log("Number of items in form:", items.length);
    for (var i = 0; i < items.length; i++) {
      console.log("Item " + i + ":", items[i].getTitle());
    }

    var formResponse = form.createResponse();
    formResponse.withItemResponse(
      items[0].asParagraphTextItem().createResponse(params.companyInfo)
    ); // Company Info
    formResponse.withItemResponse(
      items[1]
        .asParagraphTextItem()
        .createResponse(params.primaryContactDetails)
    ); // Primary Contact Details
    formResponse.withItemResponse(
      items[2].asParagraphTextItem().createResponse(params.projectOverview)
    ); // Project Overview
    formResponse.withItemResponse(
      items[3]
        .asParagraphTextItem()
        .createResponse(params.technicalRequirements)
    ); // Project Overview
    formResponse.withItemResponse(
      items[4]
        .asParagraphTextItem()
        .createResponse(params.legalityComplianceRequirements)
    ); // Legality and Compliance Requirements
    formResponse.withItemResponse(
      items[5].asParagraphTextItem().createResponse(params.additionalNotes)
    ); // Additional Notes
    formResponse.withItemResponse(
      items[6].asParagraphTextItem().createResponse(params.postMVPDevInfo)
    ); // Post-MVP Dev info etc.

    formResponse.submit();

    return ContentService.createTextOutput(
      JSON.stringify({ status: "Success" })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    console.error("Error submitting form: " + error.toString());
    return ContentService.createTextOutput(
      JSON.stringify({ status: "Error", message: error.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function testDoPost() {
  var mockParams = {
    parameter: {
      companyInfo: "Test Company Info",
      primaryContactDetails: "Test Primary Contact Details",
      projectOverview: "Test Project Overview",
      technicalRequirements: "test",
      legalityComplianceRequirements:
        "Test Legality and Compliance Requirements",
      additionalNotes: "Test Additional Notes",
      postMVPDevInfo: "Test Post-MVP Dev Info",
    },
  };

  return doPost(mockParams);
}
