import {withPlanetTag} from "../utils/DI/tags";
import {useInjection} from "brandi-react";
import {Tokens} from "../utils/DI/tokens";
import {useEffect, useState} from "react";
import {Planets} from "../utils/Types";

export const PlanetsList = withPlanetTag(() => {
  const logger = useInjection(Tokens.logger)
  const apiService = useInjection(Tokens.apiService);

  const [list, setList] = useState<Planets[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    logger.log('Getting planets')
    apiService.getPlanets().then(data => {
      setIsLoading(false)
      setList(data)
    })
  }, [apiService,logger])

  return isLoading ? (<div>Loading planets...</div>) : (
    <>
      <ul>
        {
          list.map(planet => <li key={planet.url}>{planet.name}</li>)
        }
      </ul>
    </>
  )
})
