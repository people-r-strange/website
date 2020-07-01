var config = {
    style: 'mapbox://styles/vmax/ckb1dkivg04211io34tochnv7',
    accessToken: 'pk.eyJ1Ijoidm1heCIsImEiOiJja2FyNDRwYzcwYXoxMnJteHQ2Z3pyZTM3In0._z0t1mbmHP9D-jCd_lm_BQ',
    showMarkers: true,
    theme: 'light',
    alignment: 'left',
    title: 'A Map of my Many Moves',
    subtitle: 'Where in the World have I Lived?',
    byline: 'By Vivienne Maxwell',
    footer: 'Vivienne Maxwell 2020',
    chapters: [
        {
            id: 'slug-style-id',
            title: 'Yonkers, NY',
            description: 'It all started here, at St. Johns Riverside Hospital on February 19th some 20-odd years ago. What follows is a mapping of all the places I have lived. By living, I mean I was in that place for a minimum of three months. Who said nomadic was out?',
            location: {
              center: [-73.88703, 40.97087],
              zoom: 4.02,
              pitch: 1.00,
              bearing: 0.80
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'new-york',
            title: 'Brooklyn, NY',
            description: 'My First move was to Caroll Gardens in Brooklyn, NY. We moved there when my younger sister was born. For the first seven years of my life I was a true city kid, with all of NYC as my playground.',
            location: {
              center: [-73.99486, 40.68253],
              zoom: 14.00,
              pitch: 59.50,
              bearing: 30.40
              },
              onChapterEnter: [
                  // {
                  //     layer: 'layer-name',
                  //     opacity: 1
                  // }
              ],
              onChapterExit: [
                  // {
                  //     layer: 'layer-name',
                  //     opacity: 0
                  // }
              ]
          },

        {
            id: 'geneva',
            title: 'Geneva, Switzerland',
            description: 'In 2006, my family packed up and shipped most of our belongings overseas. For the first few months we had temporary furniture because all of our furniture was in a shipping container somewhere in the middle of the Atlantic Ocean. For the next eight years, I grew up in Bernex—a town outside Geneva. Here, the mountains and vineyards were my playground.',
            location: {
              center: [6.07988, 46.17758],
              zoom: 11.00,
              pitch: 60.00,
              bearing: 24.35
              },
              onChapterEnter: [
                  // {
                  //     layer: 'layer-name',
                  //     opacity: 1
                  // }
              ],
              onChapterExit: [
                  // {
                  //     layer: 'layer-name',
                  //     opacity: 0
                  // }
              ]
          },

          {
              id: 'ogunquit',
              title: 'Ogunquit, Maine',
              description: 'Every summer my sister and I would live with our grandparents in Ogunquit, Maine. This would become a second home for me, a place where I would always go back to, regardless of where in the world I was living.',
              location: {
                center: [-70.59440, 43.26236],
                zoom: 16.42,
                pitch: 60.00,
                bearing: 24.00
                },
                onChapterEnter: [
                    // {
                    //     layer: 'layer-name',
                    //     opacity: 1
                    // }
                ],
                onChapterExit: [
                    // {
                    //     layer: 'layer-name',
                    //     opacity: 0
                    // }
                ]
            },

            {
                id: 'Upper East Side',
                title: 'Upper East Side, NYC',
                description: 'In 2015, my family moved back to the City. Finding housing in NYC is *HARD*, so we lived in an airbnb for the first three months. We nicknamed it "The Pit": a teeny tiny dark two-bedroom apartment, that was really just a one-bedroom with a few walls. But location is everything amiright?',
                location: {
                  center: [-73.94667, 40.78242],
                  zoom: 14.53,
                  pitch: 59.50,
                  bearing: 30.41
                  },
                  onChapterEnter: [
                      // {
                      //     layer: 'layer-name',
                      //     opacity: 1
                      // }
                  ],
                  onChapterExit: [
                      // {
                      //     layer: 'layer-name',
                      //     opacity: 0
                      // }
                  ]
              },

              {
                  id: 'Roosevelt Island',
                  title: 'Roosevelt Island, NYC',
                  description: 'The first few months of repatriation were hard. Weekends were spent househunting. But we finally found a beautiful apartment on Roosevelt Island—an island between Manhattan and Queens—and no it is not Randalls Island or Rikers Island!',
                  location: {
                    center: [-73.94771, 40.76492],
                    zoom: 13.60,
                    pitch: 59.50,
                    bearing: 33.60
                    },
                    onChapterEnter: [
                        // {
                        //     layer: 'layer-name',
                        //     opacity: 1
                        // }
                    ],
                    onChapterExit: [
                        // {
                        //     layer: 'layer-name',
                        //     opacity: 0
                        // }
                    ]
                },

                {
                    id: 'Smith',
                    title: 'Smith College, Northampton MA',
                    description: 'In 2017, I graduated high school and moved to Massachusetts for College. This would be my home for the next two years.',
                    location: {
                      center: [-72.63731, 42.31998],
                      zoom: 10.00,
                      pitch: 60.00,
                      bearing: -9.60
                      },
                      onChapterEnter: [
                          // {
                          //     layer: 'layer-name',
                          //     opacity: 1
                          // }
                      ],
                      onChapterExit: [
                          // {
                          //     layer: 'layer-name',
                          //     opacity: 0
                          // }
                      ]
                  },

                  {
                      id: 'Holyoke',
                      title: 'Holyoke, MA',
                      description: 'The summer after my first year at college, I stayed in the Valley and worked in a paleontology lab at Smith College. A professor of mine was kind enough to let me live in her renovated attic in Holyoke.',
                      location: {
                        center: [-72.61675, 42.22017],
                        zoom: 12.08,
                        pitch: 60.00,
                        bearing: -0.80
                        },
                        onChapterEnter: [
                            // {
                            //     layer: 'layer-name',
                            //     opacity: 1
                            // }
                        ],
                        onChapterExit: [
                            // {
                            //     layer: 'layer-name',
                            //     opacity: 0
                            // }
                        ]
                    },

                    {
                        id: 'Whites',
                        title: 'Lakes of the Clouds Hut, White Mountains NH',
                        description: 'The following summer, I got a gig working as a hut "croo" in the White Mountains of New Hampshire. It took a while getting used to living in a moldy cold hut, but the view and the people made it totally worth it. Anyone who has met me knows how much I loved living at Lakes of the Clouds Hut!',
                        location: {
                          center: [-71.31909, 44.25875],
                          zoom: 13.00,
                          pitch: 60.00,
                          bearing: -4.80
                          },
                          onChapterEnter: [
                              // {
                              //     layer: 'layer-name',
                              //     opacity: 1
                              // }
                          ],
                          onChapterExit: [
                              // {
                              //     layer: 'layer-name',
                              //     opacity: 0
                              // }
                          ]
                      },

                      {
                          id: 'Hamburg',
                          title: 'Hamburg, Germany',
                          description: 'Three weeks after hiking out of the Whites, I packed all of my belongings into a suitcase and backpack and headed off to Hamburg. The plan was to do my entire junior year of college abroad in Germany, taking classes at Universität Hamburg and living in a Studentenwohnheim. Of all the places I have lived, that Studentenwohnheim felt like home and my "Flur"-mates really felt like family.',
                          location: {
                            center: [9.94478, 53.58592],
                            zoom: 12.00,
                            pitch: 59.50,
                            bearing: -9.60
                            },
                            onChapterEnter: [
                                // {
                                //     layer: 'layer-name',
                                //     opacity: 1
                                // }
                            ],
                            onChapterExit: [
                                // {
                                //     layer: 'layer-name',
                                //     opacity: 0
                                // }
                            ]
                        },

                        {
                            id: 'harlem',
                            title: 'Hamilton Heights, NYC',
                            description: 'But then a global pandemic happened. The Hamburg program was cancelled and I had to pack up all my things, say quick goodbyes and head back to live with my family. During my first year of college, they had moved from Roosevelt Island to Hamilton Heights. And that is where I am today, living in a limbo, not knowing where I will move to next. Hopefully I can return to Smith College in the Fall. But for the time being, we all are living in the present.',
                            location: {
                              center: [-73.95565, 40.82235],
                              zoom: 14.00,
                              pitch: 60.00,
                              bearing: 29.60
                              },
                              onChapterEnter: [
                                  // {
                                  //     layer: 'layer-name',
                                  //     opacity: 1
                                  // }
                              ],
                              onChapterExit: [
                                  // {
                                  //     layer: 'layer-name',
                                  //     opacity: 0
                                  // }
                              ]
                          },

                          {
                              id: 'Fishkill',
                              title: 'Fishkill, NY?',
                              description: 'With both parents as theoretical empty-nesters (due to the current situation both my sister and I have moved back in), city life is looking less attractive. A desire to be in a small town, with easy access to nature, means that my family will once more pack up our belongings and move. Rumors of this being the "forever" house have been going around, but I doubt our nomadic heat-loving parents will settle in upstate New York. Many more moves are in the future.',
                              location: {
                                center: [-73.89407, 41.54635],
                                zoom: 8.94,
                                pitch: 60.00,
                                bearing: 7.55
                                },
                                onChapterEnter: [
                                    // {
                                    //     layer: 'layer-name',
                                    //     opacity: 1
                                    // }
                                ],
                                onChapterExit: [
                                    // {
                                    //     layer: 'layer-name',
                                    //     opacity: 0
                                    // }
                                ]
                            },




    ]
};
