using System;
using BestCandidateSearchApp.Models;
using BestCandidateSearchApp.Services;
using BestCandidateSearchApp.ViewModels;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;

namespace BestCandidateSearchApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CandidateController : ControllerBase
    {
        private readonly ICandidateRepository _candidateServices;
        private readonly IPositionRepository _positionServices;
        public CandidateController(ICandidateRepository candidateServices, IPositionRepository positionServices)
        {
            this._candidateServices = candidateServices;
            this._positionServices = positionServices;
        }

        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public ActionResult<CandidateViewModel> GetById(int id)
        {


            //Position p = _positionServices.GetById(id);
            //Candidate candidate = _candidateServices.SearchCandidateBySkills(p.Skills);
            //if (null != candidate)
            //{
            //    CandidateViewModel vmCandidate = new CandidateViewModel
            //    {
            //        CandidateId = candidate.CandidateId,
            //        Name = candidate.Name,
            //        Email = candidate.Email,
            //        Phone = candidate.Phone,
            //        Skills = String.Join(",", candidate.Skills)
            //    };
            //    return vmCandidate;
            //}
            //else
            //{
            //    return NotFound();
            //}

            Position p = _positionServices.GetById(id);
            try
            {
                Candidate candidate = _candidateServices.SearchCandidateBySkills(p.Skills);
                CandidateViewModel vmCandidate;
                if (null != candidate)
                {
                    vmCandidate = new CandidateViewModel
                    {
                        CandidateId = candidate.CandidateId,
                        Name = candidate.Name,
                        Email = candidate.Email,
                        Phone = candidate.Phone,
                        Skills = String.Join(",", candidate.Skills),
                        Success = true
                };
                   
                }
                else
                {
                    vmCandidate = new CandidateViewModel
                    {
                        Message = "Candidate not found",
                        Success = false
                    };
                }

                return vmCandidate;
            }
            catch(Exception e)
            {
                throw new Exception(e.Message);
            }


        }
    }
}
