using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using BestCandidateSearchApp.Models;
using BestCandidateSearchApp.Services;
using BestCandidateSearchApp.ViewModels;

namespace BestCandidateSearchApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostionController : ControllerBase
    {
        private readonly IPositionRepository _positionServices;

        public PostionController(IPositionRepository positionServices)
        {
            this._positionServices = positionServices;
        }
        // GET: api/Postions
        [HttpGet]
        public ActionResult<IEnumerable<PositionViewModel>> Get()
        {
            IEnumerable<PositionViewModel> vmPositions = _positionServices.GetAll().
                Select(p => new PositionViewModel
                {
                    PositionId = p.PositionId,
                    Name = p.Name,
                    Skills = p.Skills
                });
            return vmPositions.ToList();
        }
    }
}
