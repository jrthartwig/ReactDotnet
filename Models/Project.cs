using System;

namespace ReactDotnet.Models
{
    public class Project
    {
        public int ID { get; set; }
        public string Title { get; set; }
        public string Requester { get; set; }
        public string Sponsor { get; set; }
        public DateTime DateEntered { get; set; }

        public DateTime GoLiveDate { get; set; }
        public string Status { get; set; }
    }
}