package hr.tvz.npupjj.npupjjvisitzagreb.QuartzScheduler;

import org.quartz.Job;
import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;
import org.springframework.scheduling.quartz.QuartzJobBean;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DatabaseConnectionCheckJob extends QuartzJobBean {
    private static final String DB_URL = "jdbc:mysql://localhost:3306";
    private static final String DB_USERNAME = "root";
    private static final String DB_PASSWORD = "root";

    @Override
    public void executeInternal(JobExecutionContext context) {
        System.out.println("Checking database connection...");

        try (Connection connection = DriverManager.getConnection(DB_URL, DB_USERNAME, DB_PASSWORD)) {
            System.out.println("Database connection successful!");
        } catch (SQLException e) {
            System.out.println("Failed to connect to the database: " + e.getMessage());
        }
    }
}

