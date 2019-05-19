﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BestCandidateSearchApp.ViewModels
{
    public class CandidateViewModel
    {
        public int CandidateId { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        //public List<string> Skills { get; set; }
        public string Skills { get; set; }
        public string Message { get; set; }
        public bool Success { get; set; }
    }
}
