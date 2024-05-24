import Joi from "joi";

// validate Match
export function validateMatch(match) {
  const schema = Joi.object({
    competition: Joi.object({
      name: Joi.string().required(),
      code: Joi.string().required(),
      emblem: Joi.string().required(),
    }).required(),
    venue: Joi.string().required(),
    teams: Joi.object({
      home: Joi.object({
        name: Joi.string().required(),
        image: Joi.string().required(),
        id: Joi.number().required(),
      }).required(),
      away: Joi.object({
        name: Joi.string().required(),
        image: Joi.string().required(),
        id: Joi.number().required(),
      }).required(),
    }).required(),
    status: Joi.string().required(),
    scores: Joi.object({
      home: Joi.number().default(0),
      away: Joi.number().default(0),
    }),
    date: Joi.object({
      utcDate: Joi.string().required(),
      time: Joi.string().required(),
    }).required(),
    varcheck: Joi.object({
      isVarcheck: Joi.boolean().default(false),
      status: Joi.string(),
    }),
  });

  return schema.validate(match);
}

// Update  Match
export function validateUpdateMatch(match) {
  const schema = Joi.object({
    competition: Joi.object({
      name: Joi.string(),
      code: Joi.string(),
      emblem: Joi.string(),
    }),
    venue: Joi.string(),
    teams: Joi.object({
      home: Joi.object({
        name: Joi.string(),
        image: Joi.string(),
        id: Joi.number(),
      }),
      away: Joi.object({
        name: Joi.string(),
        image: Joi.string(),
        id: Joi.number(),
      }),
    }),
    status: Joi.string(),
    scores: Joi.object({
      home: Joi.number().default(0),
      away: Joi.number().default(0),
    }),
    date: Joi.object({
      utcDate: Joi.string(),
      time: Joi.string(),
    }),
    varcheck: Joi.object({
      isVarcheck: Joi.boolean().default(false),
      status: Joi.string().default(null),
    }),
  });

  return schema.validate(match);
}
