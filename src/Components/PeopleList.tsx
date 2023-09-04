import {useInjection} from "brandi-react";
import {Tokens} from "../utils/DI/tokens";
import {useEffect, useState} from "react";
import {People} from "../utils/Types";

export const PeopleList = () => {
  const apiService = useInjection(Tokens.apiService);
  const logger = useInjection(Tokens.logger)

  const [list, setList] = useState<People[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    logger.log('Getting people')
    apiService.getPeople().then(data => {
      setIsLoading(false)
      setList(data)
    })
  }, [apiService, logger])

  return isLoading ? (<div>Loading people...</div>) : (
    <>
      <ul>
        {
          list.map(man => <li key={man.url}>{man.name}</li>)
        }
      </ul>
    </>
  )
}
