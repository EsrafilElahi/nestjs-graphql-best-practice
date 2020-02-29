import { Injectable, Logger } from '@nestjs/common'
import { Cron, CronExpression, Interval, Timeout } from '@nestjs/schedule'

@Injectable()
export class AppService {
	@Cron('45 * * * * *')
	handleCron() {
		Logger.log('Called when the second is 45', AppService.name)
	}

	@Interval(10000)
	handleInterval() {
		Logger.log('Called every 10 seconds', AppService.name)
	}

	@Timeout(5000)
	handleTimeout() {
		Logger.log('Called once after 5 seconds', AppService.name)
	}
}
