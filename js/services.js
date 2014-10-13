app.service('CareerFairService', function($q) {
  
  return {
    // Company grid contains:
    // id - string - the company id used in urls, and for referencing the company
    // name - string - the organization name to display
    // starred - boolean - whether or not this company has been flagged/starred as a favorite
    // booth - int - the unique booth number for this company
    // industry
    // description
    // majors
    // positions
    // citizenship
    companies: company_list, //companies, //company_grid,
    linkedinData: company_list_linkedinData,
    csoData: company_list_csoData,
    
    
    // Booth information includes:
    // id - int - the unique booth number used to identify this booth and link it to a company
    // bNum, label - int - the label to display on the booth before a company is assigned
    // I'm just going to use the id number, and unlike tech expo, each room will NOT start counting booths at 1
    // itll be like iday, where the counting continues across rooms
    // room - string - the name of the room this booth is in (user-friendly format)
    // floor - int - the name of the floor this booth is on (user-friendly format)
    // x - int - top-left x coordinate on the svg map
    // y - int - top-left y coordinate on the svg map
    // rotate - int - degrees to rotate the booth 
    // compId - string - the abbreviated name and unique identifier of a company
    
    booths: booth_info,

    // feed in a unique identifier that will not change
    // in my data i'm using empId (the cso id number)
    // to link btw tables
    // janky databases basically
    //getLinkedInInfo: function(companyId) {
      /*var result = null;
      this.companies.forEach(function(company) {
        if (company.id === companyId) dfd.resolve(company);
      });

      return result;*/

      // assumes one will match

      //this.linkedinData.forEach(function(company) {
      //  for (var i = 0; i < this.linkedinData.length; i++)
      //  {
      //    if(linkedinData[i]["empId"] == companyId )
      //    {
      //    
      //    } 
      //  }

    //},
    
    setCompanyBoothInfo: function() {
      // companies:
      // contains information about the companies
      // and who/what they are recruiting at this particular career fair
      // booths:
      // contains information about both the booths "real life location" (room, floor)
      // as well as their svg map location (coordinates, rotation)
      // assumption that booth - company mapping is exactly 1:1
      // ideally no empty booths, and each company has only one booth
      // empty booths are more likely though (cancellations)
      
      // so iterate through all booths and find the matching company for each (if any) -----
      
      // then copy the info the company details page would care about that is booth-specific
      // assign from the booth info
      // eg. link to booth on map, room, floor user-friendly data
      // company doesnt care about x, y, coordinates on the map,
      // ..... or whether it is active(matche params, display diff on map?)
      
      
      
    },
    // getBoothLayout
    getBooths: function() { return this.booths; },
    
    getBooth: function(boothNumber) {
      var dfd = $q.defer();
      this.booths.forEach(function(booth) {
        if (booth.bNum === boothNumber) dfd.resolve(booth);
      });

      return dfd.promise;
    },

    getCompanies: function() {

      

      for (var i = 0; i < this.companies.length; i++) {
        
        // link the relevant information from the booths to the corresponding company
        for (var j = 0; j < this.booths.length; j++) {
          
          if(this.companies[i].booth == this.booths[j].bNum) {
            this.companies[i].room = this.booths[j].room;
            this.companies[i].floor = this.booths[j].floor;
            
            this.booths[j].compId = this.companies[i].id;
            this.booths[j].id = "booth" + this.booths[j].bNum;
            
            //this.companies[i].booth = this.booths[j].id;
            break;
          }
        }

        

//{"empId":51,"linkedinID":1864,"Source Page URL":"https://www.linkedin.com/company/3m",
//"companyName":"3M","industry":"Mechanical or Industrial Engineering",
//"specialties":"Innovation, Collaboration, Global, Diverse Career Opportunities",
//"companySize":"10,001+ employees","type":"Public Company","founded":1902,
//"hqAddress":"","hqCity":"","hqState":"","hqZip":null,"hqCountry":"",
//"blurb":"Over the years, our innovations have improved daily life for hundreds of millions of people all over the world. We have made driving at night easier, made buildings safer, and made consumer electronics lighter, less energy-intensive and less harmful to the environment. We even helped put a man on the moon. 3M is an incredible place.",
//"website":"http://www.3M.com/careers"},

//{"empId":51,"organizationName":"3M","branch":"Film Manufacturing",
//"website":"http://www.mmm.com",
//"facebook":"https://www.facebook.com/3MCareers","twitter":null,"linkedin":"",
//"industry":"Manufacturing","type":"Public",
//"address1":"3M Film Manufacturing & Supply Chain Operations",
//"address2":"3M Center, Building 0220-12N-05",
//"city":"St. Paul","state":"MN","zip":55144-1000,"country":"USA",
//"phone":"(651) 737-4259","fax":"651. 733.1570",
//"profile":"Diversified Manufacturing",
//"onlineApp":"","inDirectory":"TRUE",
//"Majors":"ChE - Chemical Engineering EE - Electrical Engineering IE - Industrial Engineering MaDE - Manufacturing and Design Engineering ME - Mechanical Engineering MatSE - Materials Science and Engineering"},

//branch,website,facebook:,twitter:,linkedin:"",industry:,type:,address1:address2:,city:"St. Paul",state:"MN",zip:,Country:,phone:,fax:,profile==description,onlineApp:""},

        
        // link the relevant information from the CSO mccormickconnect data
        // to each company object
        var k = 0;
        for (k = 0; k < this.csoData.length; k++)
        {
          //csoData[k]["empId"] 
          if(this.csoData[k].empId == this.companies[i].empId )
          {
            // name = organizationname
              this.companies[i].branch = this.csoData[k].branch;
              this.companies[i].website = this.csoData[k].website;
              // facebook // twitter // linkedin
              this.companies[i].facebook = this.csoData[k].facebook;
              this.companies[i].twitter = this.csoData[k].twitter;
              //this.companies[i].linkedin = this.csoData[k].linkedin;

              this.companies[i].industry = this.csoData[k].industry;
              this.companies[i]["type"] = this.csoData[k]["type"];
              // address1 // ,address2: // country
              this.companies[i].city = this.csoData[k].city;
              this.companies[i].state = this.csoData[k].state;
              this.companies[i].zip = this.csoData[k].zip;
              // phone  // fax
              this.companies[i].description = this.csoData[k].profile;
              // onlineApp
              break;
          } 
        }

        // link the relevant information from the linkedIn data
        // to each company object
        for (k = 0; k < this.linkedinData.length; k++)
        {
          
          if(this.linkedinData[k].empId == this.companies[i].empId )
          {

            // name = companyName
            this.companies[i].linkedinID = this.linkedinData[k].linkedinID;
            this.companies[i].linkedinIndustry = this.linkedinData[k].industry;
            this.companies[i].specialties = this.linkedinData[k].specialties;
            this.companies[i]["size"] = this.linkedinData[k].companySize;
            this.companies[i].companyType = this.linkedinData[k].type;
            this.companies[i].founded = this.linkedinData[k].founded;

            this.companies[i].hqCity = this.linkedinData[k].hqCity;
            this.companies[i].hqState = this.linkedinData[k].hqState;
            this.companies[i].hqZip = this.linkedinData[k].hqZip;
            this.companies[i].description2 = this.linkedinData[k].blurb;
            this.companies[i].companyWebsite = this.linkedinData[k].website;

            // or ["Source Page URL"];
            this.companies[i].linkedin = "http://www.linkedin.com/company/" + this.companies[i].linkedinID;
           /*  type  founded  hqAddress  Source Page url  hqCountry  */
              break;
          } 
        }


        


      }
      
      return this.companies;
    },
    
    getCompany: function(companyId) {
      var dfd = $q.defer();
      this.companies.forEach(function(company) {
        if (company.id === companyId) dfd.resolve(company);
      });

      return dfd.promise;
    },

    getCompanyByBooth: function(boothNum) {
      var dfd = $q.defer();
      this.companies.forEach(function(company) {
        if (company.booth === boothNum) dfd.resolve(company);
      });

      return dfd.promise;
    },

    /* this doesnt work bleh */
     getNextCompany: function(currCompanyId) {
      var currCompany = getCompany(currCompanyId);

      var currCompanyBooth = currCompany.booth;
      //STABILIZE LATER
      // this is not a gaurunteed function!
      // assumes that highest booth value will have the last company
      var nextCompanyBooth = (currCompanyBooth+1)%companies.length;

      //var nextCompany = ;
      // i dont actually know what this does
      //var dfd = $q.defer();
      // this is janky and doesnt promise an order but im tired of switchign views back and forth to peruse companies
      for(var i = 0; i<this.booths.length; i++)
      {
        if(booths[i].bNum == nextCompanyBooth) return getCompany(booths[i].compId);
      }
      //this.companies.forEach(function(company) {
      //  if (company.id === companyId) dfd.resolve(company);
      //});

      // fi for some reason there wasn't a next...
      return currCompany;
      //return dfd.promise;
    }
  }
})

    //  this.companies.forEach(function(company) {
    //    for (var i = 0; i < this.booths.length; i++) {
    //      if(company.booth === booths[i].bNum) {
    //      }  }

app.service('AttendeesService', function($q) {
  
  return {
    
    attendees: [
    { id: '1', firstname: 'Nicolas', lastname: 'Cage', vegetarian: false, shirtSize: 'L' },
    { id: '2', firstname: 'Jean-Claude', lastname: 'Van Damme', vegetarian: false, shirtSize: 'L' },
    { id: '3', firstname: 'Keanu', lastname: 'Reeves', vegetarian: true, shirtSize: 'S' },
    { id: '4', firstname: 'Steven', lastname: 'Seagal', vegetarian: true, shirtSize: 'M' }
  ],
    

    getAttendees: function() {
      return this.attendees;
    },
    
    getAttendee: function(attendeeId) {
      var dfd = $q.defer();
      this.attendees.forEach(function(attendee) {
        if (attendee.id === attendeeId) dfd.resolve(attendee);
      });

      return dfd.promise;
    }
  }
})