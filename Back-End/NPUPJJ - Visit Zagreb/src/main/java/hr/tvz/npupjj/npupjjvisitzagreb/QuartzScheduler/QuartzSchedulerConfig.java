package hr.tvz.npupjj.npupjjvisitzagreb.QuartzScheduler;

import org.quartz.*;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableScheduling;

@Configuration
public class QuartzSchedulerConfig {
    @Bean
    public JobDetail databaseConnectionCheckJob() {
        return
                JobBuilder.newJob(DatabaseConnectionCheckJob.class).withIdentity("databaseConnectionCheckJob").storeDurably().build();
    }
    @Bean
    public Trigger objavaJobTrigger() {
        SimpleScheduleBuilder scheduleBuilder = SimpleScheduleBuilder.simpleSchedule()
                .withIntervalInSeconds(10).repeatForever();
        return TriggerBuilder.newTrigger().forJob(databaseConnectionCheckJob())
                .withIdentity("objavaTrigger").withSchedule(scheduleBuilder).build();
    }
}
